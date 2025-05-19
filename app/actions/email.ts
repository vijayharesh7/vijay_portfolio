"use server"

import { Resend } from "resend"

// Hardcoded API key as requested (move to env variables in production)
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: {
  name: string
  email: string
  subject: string
  message: string
}) {
  try {
    const { name, email, subject, message } = formData

    // Validate the input
    if (!name || !email || !subject || !message) {
      console.log("Missing required fields:", { name, email, subject, message })
      return {
        success: false,
        error: "Missing required fields",
      }
    }

    console.log("Attempting to send email with data:", { name, email, subject })

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["vijayharesh72@gmail.com"],
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

    return {
      success: true,
      data,
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    }
  }
}
