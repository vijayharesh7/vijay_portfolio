import { NextResponse } from "next/server"
import { getResend } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    console.log("API route received data:", { name, email, subject })

    // Validate the input
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    const resend = getResend()

    // In Resend's free tier, you can only send emails to the email address that owns the API key
    // This should be the email you used to sign up for Resend
    const toEmail = "vjharesh7899@gmail.com" // Replace with your verified Resend email

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [toEmail],
      subject: `Portfolio Contact: ${subject}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    })

    console.log("Email sent successfully:", data)

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to send email",
      },
      { status: 500 },
    )
  }
}
