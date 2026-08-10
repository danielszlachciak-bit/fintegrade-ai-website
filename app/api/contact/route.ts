import { NextResponse } from "next/server";
import { z } from "zod";

import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { verifyTurnstile } from "@/lib/turnstile";

export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),

  email: z.string().trim().email().max(160),

  company: z.string().trim().max(160).optional().default(""),

  message: z.string().trim().min(10).max(2500),

  consent: z
    .union([z.literal("true"), z.literal(true)])
    .transform(() => true),

  // Pole-pułapka na boty. Powinno być puste.
  website: z.string().max(0).optional().default(""),

  turnstileToken: z.string().min(1).max(5000),
});

function formatUnknownError(error: unknown) {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
    };
  }

  if (typeof error === "object" && error !== null) {
    return error;
  }

  return {
    message: String(error),
  };
}

export async function POST(request: Request) {
  try {
    /*
     * Ochrona przed nadmiernie dużym zapytaniem.
     */
    const contentLength = Number(
      request.headers.get("content-length") ?? "0"
    );

    if (
      Number.isFinite(contentLength) &&
      contentLength > 15_000
    ) {
      return NextResponse.json(
        { error: "payload_too_large" },
        { status: 413 }
      );
    }

    /*
     * Odczytanie JSON-a przesłanego przez formularz.
     */
    let requestBody: unknown;

    try {
      requestBody = await request.json();
    } catch {
      return NextResponse.json(
        { error: "invalid_json" },
        { status: 400 }
      );
    }

    /*
     * Walidacja danych.
     *
     * Nie używamy .strict(), dlatego dodatkowe pola techniczne,
     * np. cf-turnstile-response, zostaną pominięte zamiast
     * powodować błąd 400.
     */
    const parsed = contactSchema.safeParse(requestBody);

    if (!parsed.success) {
      console.warn(
        "contact_validation_failed",
        JSON.stringify(parsed.error.flatten())
      );

      return NextResponse.json(
        {
          error: "invalid_input",
          fields: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    /*
     * Weryfikacja Cloudflare Turnstile po stronie serwera.
     */
    const turnstileValid = await verifyTurnstile(
      parsed.data.turnstileToken
    );

    if (!turnstileValid) {
      console.warn("contact_turnstile_failed");

      return NextResponse.json(
        { error: "bot_check_failed" },
        { status: 403 }
      );
    }

    /*
     * Zapis wiadomości do Supabase.
     */
    const supabase = getSupabaseAdmin();

    const { data: insertedRows, error: insertError } =
      await supabase
        .from("contact_messages")
        .insert({
          name: parsed.data.name,
          email: parsed.data.email,
          company: parsed.data.company || null,
          message: parsed.data.message,
          consent: true,
          source: "fintegrade.ai",
        })
        .select("id")
        .limit(1);

    if (insertError) {
      console.error(
        "contact_supabase_error",
        JSON.stringify({
          code: insertError.code,
          message: insertError.message,
          details: insertError.details,
          hint: insertError.hint,
        })
      );

      return NextResponse.json(
        { error: "database_error" },
        { status: 500 }
      );
    }

    const insertedId = insertedRows?.[0]?.id;

    if (!insertedId) {
      console.error(
        "contact_supabase_error",
        "Insert completed, but Supabase did not return the record ID."
      );

      return NextResponse.json(
        { error: "database_error" },
        { status: 500 }
      );
    }

    console.info("contact_message_saved", {
      id: insertedId,
    });

    return NextResponse.json(
      {
        ok: true,
        messageId: insertedId,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error(
      "contact_submit_failed",
      formatUnknownError(error)
    );

    return NextResponse.json(
      { error: "server_error" },
      { status: 500 }
    );
  }
}
