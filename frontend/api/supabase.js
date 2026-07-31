import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);

export async function saveToSupabase(formData) {
  const { error } = await supabase.from("contact_messages").insert({
    sender_name: formData.senderName.trim(),
    sender_email: formData.senderEmail.trim().toLowerCase(),
    subject: formData.subject,
    message: formData.message.trim(),
    want_collab: formData.wantCollab ?? false,
    sender_ip: "browser",
    status: "sent",
    created_at: new Date().toISOString(),
  });

  if (error) throw new Error(error.message);
}
