import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const OWNER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_OWNER_TEMPLATE_ID;
const VISITOR_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_VISITOR_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const SUBJECT_LABELS = {
  collab: "Project Collaboration",
  discuss: "Code Discussion",
  study: "Study Together",
  hire: "Job / Internship",
  other: "Other",
};

export async function sendContactEmails(formData) {
  const collab_message = formData.want_collab
    ? "I noticed you're interested in collaborating — exciting! I'll make sure to address that in my reply."
    : "I've safely received your message and will get back to you as soon as possible.";

  const templateParams = {
    from_name: formData.senderName,
    from_email: formData.senderEmail,
    subject_label: SUBJECT_LABELS[formData.subject] || formData.subject,
    message: formData.message,
    want_collab: formData.want_collab ? "Yes" : "No",
    collab_message: collab_message,
  };

  const [ownerResult, visitorResult] = await Promise.allSettled([
    emailjs.send(SERVICE_ID, OWNER_TEMPLATE_ID, templateParams, PUBLIC_KEY),
    emailjs.send(SERVICE_ID, VISITOR_TEMPLATE_ID, templateParams, PUBLIC_KEY),
  ]);

  if (ownerResult.status === "rejected") {
    console.error("Owner email failed:", ownerResult.reason);
    throw new Error("Failed to send message. Please try again.");
  }

  if (visitorResult.status === "rejected") {
    console.warn("Visitor auto-reply failed:", visitorResult.reason);
  }

  return { success: true };
}
