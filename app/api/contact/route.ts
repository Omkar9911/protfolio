import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/contact";
import { profile } from "@/data/profile";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Please check the form fields and try again.",
        errors: parsed.error.flatten().fieldErrors
      },
      { status: 400 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || profile.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !fromEmail) {
    return NextResponse.json(
      {
        message: "Email delivery is not configured yet. Please use the direct email link.",
        directEmail: profile.email
      },
      { status: 202 }
    );
  }

  const { name, email, company, message } = parsed.data;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company || "Not provided");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const resend = new Resend(resendApiKey);

  await resend.emails.send({
    from: fromEmail,
    to: toEmail,
    replyTo: email,
    subject: `Portfolio inquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      "",
      message
    ].join("\n"),
    html: `
      <div style="font-family:Inter,Arial,sans-serif;line-height:1.6;color:#111827">
        <h2>New portfolio inquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      </div>
    `
  });

  return NextResponse.json({
    message: "Thanks — your message was sent successfully."
  });
}
