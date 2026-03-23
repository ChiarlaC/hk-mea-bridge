import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Dev mode: just log and return success
    console.log(`[Subscribe] New subscriber: ${email}`);
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch("https://api.resend.com/contacts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        audience_id: process.env.RESEND_AUDIENCE_ID,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("[Subscribe] Resend error:", err);
      return NextResponse.json({ error: "Subscription failed." }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Subscribe] Error:", err);
    return NextResponse.json({ error: "Subscription failed." }, { status: 500 });
  }
}
