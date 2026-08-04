// src/api/contactApi.js

import { sendContactEmails } from "../../api/emailjs";
import { saveToSupabase } from "../../api/supabase";

export async function sendContactMessage(data) {
  // 1. Send emails via EmailJS (runs in browser — no server needed)
  // console.log("Sending contact message:", data);
  await sendContactEmails(data);

  // 2. Save to Supabase (optional but keeps your message history)
  try {
    await saveToSupabase(data);
  } catch (err) {
    // Don't fail the whole request if DB save fails
    console.warn("Supabase save failed:", err.message);
  }

  return { success: true, message: "Message sent!" };
}
