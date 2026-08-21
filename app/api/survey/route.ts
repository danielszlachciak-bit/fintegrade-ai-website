import { NextResponse } from "next/server";
import { z } from "zod";

import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { verifyTurnstile } from "@/lib/turnstile";

export const runtime = "nodejs";

const PRIVACY_POLICY_VERSION = "2026-08-21";

const surveySchema = z
  .object({
    companySize: z.string().trim().min(1).max(80),
    monthlyRevenue: z.string().trim().min(1).max(80),

    financePain: z
      .array(z.string().trim().min(1).max(160))
      .min(1)
      .max(10),

    dataAccess: z.string().trim().min(1).max(160),

    mustHave: z
      .array(z.string().trim().min(1).max(160))
      .min(1)
      .max(12),

    willingnessToPay: z.string().trim().min(1).max(80),

    email: z
      .string()
      .trim()
      .email()
      .max(160)
      .or(z.literal("")),

    privacyAcknowledged: z.literal(true),
    mvpConsent: z.boolean(),

    website: z.string().max(0),
    turnstileToken: z.string().min(1).max(5000),
  })
  .superRefine((data, ctx) => {
    if (data.mvpConsent && !data.email) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["email"],
        message:
          "Adres e-mail jest wymagany przy zgodzie na kontakt dotyczący MVP.",
      });
    }
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
    const contentLength = Number(
      request.headers.get("content-length") ?? "0"
    );

    if (
      Number.isFinite(contentLength) &&
      contentLength > 20_000
    ) {
      return NextResponse.json(
        { error: "payload_too_large" },
        { status: 413 }
      );
    }

    let requestBody: unknown;

    try {
      requestBody = await request.json();
    } catch {
      return NextResponse.json(
        { error: "invalid_json" },
        { status: 400 }
      );
    }

    const parsed = surveySchema.safeParse(requestBody);

    if (!parsed.success) {
      console.warn(
        "survey_validation_failed",
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

    const turnstileValid = await verifyTurnstile(
      parsed.data.turnstileToken
    );

    if (!turnstileValid) {
      console.warn("survey_turnstile_failed");

      return NextResponse.json(
        { error: "bot_check_failed" },
        { status: 403 }
      );
    }

    const {
      turnstileToken: _turnstileToken,
      website: _website,
      ...surveyData
    } = parsed.data;

    const supabase = getSupabaseAdmin();

    const { data: insertedRows, error: insertError } =
      await supabase
        .from("survey_submissions")
        .insert({
          company_size: surveyData.companySize,
          monthly_revenue: surveyData.monthlyRevenue,
          finance_pain: surveyData.financePain,
          data_access: surveyData.dataAccess,
          must_have: surveyData.mustHave,
          willingness_to_pay: surveyData.willingnessToPay,

          email: surveyData.email || null,

          privacy_acknowledged:
            surveyData.privacyAcknowledged,

          privacy_policy_version:
            PRIVACY_POLICY_VERSION,

          mvp_consent:
            surveyData.mvpConsent,

          mvp_consent_at:
            surveyData.mvpConsent
              ? new Date().toISOString()
              : null,

          source: "fintegrade.ai",
        })
        .select("id")
        .limit(1);

    if (insertError) {
      console.error(
        "survey_supabase_error",
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
        "survey_supabase_error",
        "Insert completed, but Supabase did not return the record ID."
      );

      return NextResponse.json(
        { error: "database_error" },
        { status: 500 }
      );
    }

    console.info("survey_submission_saved", {
      id: insertedId,
      mvpConsent: surveyData.mvpConsent,
    });

    return NextResponse.json(
      {
        ok: true,
        submissionId: insertedId,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error(
      "survey_submit_failed",
      formatUnknownError(error)
    );

    return NextResponse.json(
      { error: "server_error" },
      { status: 500 }
    );
  }
}