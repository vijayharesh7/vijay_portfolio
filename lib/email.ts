import { Resend } from "resend"

// Create a singleton instance of Resend
let resendInstance: Resend | null = null

export function getResend(): Resend {
  if (!resendInstance) {
    // Replace with your actual Resend API key
    resendInstance = new Resend(process.env.RESEND_API_KEY)
    if (!resendInstance) {
      throw new Error("Failed to create Resend instance. Check your API key.")            
    
  }
}
  return resendInstance
}

