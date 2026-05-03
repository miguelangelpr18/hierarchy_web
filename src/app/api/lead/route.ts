import { NextResponse } from "next/server";

interface LeadPayload {
  url?: string;
  businessType?: string;
  email?: string;
  whatsapp?: string;
  source?: string;
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.email || !body.whatsapp || !body.businessType) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 },
    );
  }

  // TODO: integrar con Resend o webhook de WhatsApp Business
  console.log("[lead]", {
    receivedAt: new Date().toISOString(),
    ...body,
  });

  return NextResponse.json({ ok: true });
}
