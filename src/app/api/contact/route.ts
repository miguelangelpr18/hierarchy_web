import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  business?: string;
  email?: string;
  whatsapp?: string;
  plan?: string;
  currentUrl?: string;
  message?: string;
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const required = ["name", "business", "email", "whatsapp", "message"] as const;
  const missing = required.filter((k) => !body[k]);
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  // TODO: integrar con Resend o webhook de WhatsApp Business
  console.log("[contact]", {
    receivedAt: new Date().toISOString(),
    ...body,
  });

  return NextResponse.json({ ok: true });
}
