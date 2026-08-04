import { NextResponse } from "next/server";
import { z } from "zod";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { verifyTurnstile } from "@/lib/turnstile";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  company: z.string().trim().max(160).optional().default(""),
  message: z.string().trim().min(10).max(2500),
  consent: z.literal("true"),
  website: z.string().max(0),
  turnstileToken: z.string().optional(),
}).strict();

export async function POST(request: Request) {
  try {
    const length = Number(request.headers.get("content-length") || 0);
    if (length > 15_000) return NextResponse.json({ error: "payload_too_large" }, { status: 413 });
    const parsed = schema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ error: "invalid_input" }, { status: 400 });
    if (!(await verifyTurnstile(parsed.data.turnstileToken))) return NextResponse.json({ error: "bot_check_failed" }, { status: 403 });

    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("contact_messages").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company || null,
      message: parsed.data.message,
      consent: true,
      source: "fintegrade.ai",
    });
    if (error) throw error;
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("contact_submit_failed", error instanceof Error ? error.message : "unknown");
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
