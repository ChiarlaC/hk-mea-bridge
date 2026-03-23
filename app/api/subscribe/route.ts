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

    // Send welcome email
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "HK-MEA Bridge <onboarding@resend.dev>",
        to: email,
        subject: "You're in — HK-MEA Bridge weekly briefing",
        html: `
          <div style="font-family: Inter, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 24px; color: #111;">
            <p style="font-size: 13px; color: #999; margin-bottom: 32px; letter-spacing: 0.05em; text-transform: uppercase;">HK-MEA BRIDGE</p>
            <h1 style="font-size: 22px; font-weight: 700; margin-bottom: 16px; line-height: 1.3;">You're subscribed.</h1>
            <p style="font-size: 15px; color: #444; line-height: 1.7; margin-bottom: 16px;">
              Every week, we monitor HKMA, IRD, and InvestHK — and distill the regulatory changes that matter for professionals managing Middle Eastern capital in Hong Kong.
            </p>
            <p style="font-size: 15px; color: #444; line-height: 1.7; margin-bottom: 32px;">
              Your first briefing will arrive next week. In the meantime, you can review recent updates and key glossary terms on the site.
            </p>
            <a href="https://hk-mea-bridge.vercel.app" style="display: inline-block; background: #C9963A; color: #fff; font-size: 13px; font-weight: 600; padding: 10px 20px; text-decoration: none; letter-spacing: 0.03em;">
              View latest updates →
            </a>
            <hr style="margin: 40px 0; border: none; border-top: 1px solid #eee;" />
            <p style="font-size: 12px; color: #aaa; line-height: 1.6;">
              Official sources only. No sponsored content. No investment advice.<br/>
              You can unsubscribe at any time by replying to this email.
            </p>
          </div>
        `,
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Subscribe] Error:", err);
    return NextResponse.json({ error: "Subscription failed." }, { status: 500 });
  }
}
