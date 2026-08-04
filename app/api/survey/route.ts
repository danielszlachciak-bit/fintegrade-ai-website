import { NextResponse } from "next/server";
import { z } from "zod";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { verifyTurnstile } from "@/lib/turnstile";

const schema = z.object({
  companySize: z.string().min(1).max(80),
  monthlyRevenue: z.string().min(1).max(80),
  financePain: z.array(z.string().max(160)).max(10),
  dataAccess: z.string().min(1).max(160),
  mustHave: z.array(z.string().max(160)).max(12),
  willingnessToPay: z.string().min(1).max(80),
  email: z.string().email().max(160).or(z.literal("")),
  consent: z.literal(true),
  website: z.string().max(0),
  turnstileToken: z.string().optional(),
}).strict();

export async function POST(request: Request) {
  try {
    const length = Number(request.headers.get("content-length") || 0);
    if (length > 20_000) return NextResponse.json({ error: "payload_too_large" }, { status: 413 });

    const parsed = schema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ error: "invalid_input" }, { status: 400 });
    if (!(await verifyTurnstile(parsed.data.turnstileToken))) return NextResponse.json({ error: "bot_check_failed" }, { status: 403 });

    const { turnstileToken: _, website: __, ...data } = parsed.data;
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("survey_submissions").insert({
      company_size: data.companySize,
      monthly_revenue: data.monthlyRevenue,
      finance_pain: data.financePain,
      data_access: data.dataAccess,
      must_have: data.mustHave,
      willingness_to_pay: data.willingnessToPay,
      email: data.email || null,
      consent: data.consent,
      source: "fintegrade.ai",
    });
    if (error) throw error;
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("survey_submit_failed", error instanceof Error ? error.message : "unknown");
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
