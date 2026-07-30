import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY, // service role — never the anon key
);
const resend = new Resend(process.env.RESEND_API_KEY);

const OWNER_EMAIL = process.env.OWNER_EMAIL;
const OWNER_NAME = process.env.OWNER_NAME || "Linn";
const FROM_EMAIL = process.env.FROM_EMAIL || "portfolio@resend.dev";

async function isRateLimited(ip) {
  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const { count } = await supabase
    .from("contact_messages")
    .select("*", { count: "exact", head: true })
    .eq("sender_ip", ip)
    .gte("created_at", since);
  return count >= 5;
}

function validate(body) {
  const errors = {};
  if (!body.senderName?.trim()) errors.senderName = "Name is required";
  if (!body.senderEmail?.trim()) errors.senderEmail = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.senderEmail))
    errors.senderEmail = "Invalid email";
  if (!["collab", "discuss", "study", "hire", "other"].includes(body.subject))
    errors.subject = "Invalid subject";
  if (!body.message?.trim()) errors.message = "Message is required";
  else if (body.message.trim().length < 10)
    errors.message = "Message too short";
  else if (body.message.trim().length > 500)
    errors.message = "Message too long";
  return errors;
}

function sanitize(str = "") {
  return str.replace(
    /[<>"'&]/g,
    (c) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "&": "&amp;",
      })[c],
  );
}

function formatSubject(subject) {
  return (
    {
      collab: "Project Collaboration",
      discuss: "Code Discussion",
      study: "Study Together",
      hire: "Job / Internship",
      other: "Other",
    }[subject] || subject
  );
}

function ownerEmailHtml({
  senderName,
  senderEmail,
  subject,
  message,
  wantCollab,
  createdAt,
}) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"/></head>
<body style="font-family:'Segoe UI',sans-serif;background:#0a0a0f;color:#e8e8f0;margin:0;padding:0">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px">
    <div style="background:#13131f;border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden">

      <div style="background:linear-gradient(135deg,#7c30ff,#00e5ff);padding:32px;text-align:center">
        <h1 style="margin:0;font-size:22px;color:white">📩 New Portfolio Message</h1>
        <p style="margin:8px 0 0;color:rgba(255,255,255,0.8);font-size:13px">Someone visited your portfolio</p>
      </div>

      <div style="padding:32px">
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#6b7099;width:110px;font-size:12px">FROM</td>
            <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-weight:600">${sanitize(senderName)} &lt;${sanitize(senderEmail)}&gt;</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#6b7099;font-size:12px">TOPIC</td>
            <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
              <span style="background:rgba(0,229,255,0.1);color:#00e5ff;padding:3px 12px;border-radius:100px;font-size:12px">${formatSubject(subject)}</span>
            </td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#6b7099;font-size:12px">COLLAB?</td>
            <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06)">${wantCollab ? "✅ Yes, interested" : "No"}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);color:#6b7099;font-size:12px">TIME</td>
            <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.06);font-family:monospace;font-size:12px">${new Date(createdAt).toLocaleString()}</td>
          </tr>
        </table>

        <div style="margin-top:24px">
          <p style="color:#6b7099;font-size:12px;margin-bottom:10px;letter-spacing:1px">MESSAGE</p>
          <div style="background:#0f0f1a;border-left:3px solid #00e5ff;padding:18px;border-radius:0 8px 8px 0;color:#e8e8f0;font-size:14px;line-height:1.7">
            ${sanitize(message).replace(/\n/g, "<br/>")}
          </div>
        </div>

        <div style="margin-top:28px;text-align:center">
          <a href="mailto:${sanitize(senderEmail)}?subject=Re: Your portfolio message"
             style="background:linear-gradient(135deg,#7c30ff,#00e5ff);color:white;padding:13px 28px;border-radius:8px;text-decoration:none;font-weight:600;display:inline-block">
            Reply to ${sanitize(senderName)} →
          </a>
        </div>
      </div>

      <div style="background:#0f0f1a;padding:18px 32px;text-align:center;border-top:1px solid rgba(255,255,255,0.06)">
        <p style="margin:0;color:#3d3f5c;font-size:11px;font-family:monospace">Sent from your portfolio contact form</p>
      </div>
    </div>
  </div>
</body>
</html>`;
}

function visitorEmailHtml({ senderName, message, wantCollab }) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"/></head>
<body style="font-family:'Segoe UI',sans-serif;background:#0a0a0f;color:#e8e8f0;margin:0;padding:0">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px">
    <div style="background:#13131f;border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden">

      <div style="background:linear-gradient(135deg,#00d084,#00e5ff);padding:32px;text-align:center">
        <div style="font-size:44px">✅</div>
        <h1 style="margin:10px 0 0;font-size:20px;color:white">Message Received!</h1>
      </div>

      <div style="padding:32px">
        <p style="font-size:16px">Hey <strong>${sanitize(senderName)}</strong>! 👋</p>
        <p style="font-size:14px;color:#6b7099;line-height:1.7;margin-top:10px">
          Thanks for reaching out through my portfolio. I've received your message and will
          get back to you within <strong style="color:#00e5ff">24 hours</strong>.
        </p>
        ${
          wantCollab
            ? `<p style="background:rgba(124,48,255,0.1);border:1px solid rgba(124,48,255,0.3);border-radius:8px;padding:14px;color:#bf8fff;font-size:13px;margin-top:16px">
          🚀 I noticed you're interested in collaborating — I'm especially excited to chat about this!
        </p>`
            : ""
        }
        <div style="background:#0f0f1a;border-radius:8px;padding:18px;margin:22px 0">
          <p style="margin:0 0 8px;color:#3d3f5c;font-size:11px;font-family:monospace;letter-spacing:1px">YOUR MESSAGE</p>
          <p style="margin:0;color:#6b7099;font-size:13px;line-height:1.6">${sanitize(message).slice(0, 200)}${message.length > 200 ? "..." : ""}</p>
        </div>
        <p style="font-size:13px;color:#6b7099">
          While you wait, feel free to check out my projects on
          <a href="https://github.com/coffeeespresso343" style="color:#00e5ff">GitHub</a>.
        </p>
        <p style="font-size:14px;margin-top:22px">— ${sanitize(OWNER_NAME)} 🚀</p>
      </div>

      <div style="background:#0f0f1a;padding:18px;text-align:center;border-top:1px solid rgba(255,255,255,0.06)">
        <p style="margin:0;color:#3d3f5c;font-size:11px;font-family:monospace">[LK] Portfolio · Auto-confirmation — do not reply</p>
      </div>
    </div>
  </div>
</body>
</html>`;
}

// ── MAIN HANDLER ──────────────────────────────────────────────────────────
export default async function handler(req, res) {
  // CORS headers
  res.setHeader(
    "Access-Control-Allow-Origin",
    process.env.ALLOWED_ORIGIN || "*",
  );
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST")
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });

  try {
    const body = req.body;

    // 1. Validate
    const errors = validate(body);
    if (Object.keys(errors).length > 0) {
      return res
        .status(400)
        .json({ success: false, message: "Validation failed", errors });
    }

    // 2. Get sender IP
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
      req.socket?.remoteAddress ||
      "unknown";

    // 3. Rate limit
    const limited = await isRateLimited(ip);
    if (limited) {
      return res.status(429).json({
        success: false,
        message: "Too many messages. Please wait before trying again.",
      });
    }

    const now = new Date().toISOString();

    // 4. Save to Supabase
    const { data: saved, error: dbError } = await supabase
      .from("contact_messages")
      .insert({
        sender_name: body.senderName.trim(),
        sender_email: body.senderEmail.trim().toLowerCase(),
        subject: body.subject,
        message: body.message.trim(),
        want_collab: body.wantCollab ?? false,
        sender_ip: ip,
        status: "pending",
        created_at: now,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return res
        .status(500)
        .json({ success: false, message: "Failed to save message" });
    }

    // 5. Send emails via Resend (parallel)
    const [ownerResult, visitorResult] = await Promise.allSettled([
      // Email to portfolio owner
      resend.emails.send({
        from: `${OWNER_NAME} Portfolio <${FROM_EMAIL}>`,
        to: OWNER_EMAIL,
        replyTo: body.senderEmail,
        subject: `📩 [Portfolio] ${formatSubject(body.subject)} from ${body.senderName}`,
        html: ownerEmailHtml({ ...body, createdAt: now }),
      }),

      // Auto-reply to visitor
      resend.emails.send({
        from: `${OWNER_NAME} | Portfolio <${FROM_EMAIL}>`,
        to: body.senderEmail,
        subject: `Thanks for reaching out, ${body.senderName}! 🙌`,
        html: visitorEmailHtml(body),
      }),
    ]);

    // 6. Update status in Supabase
    const emailSent = ownerResult.status === "fulfilled";
    await supabase
      .from("contact_messages")
      .update({ status: emailSent ? "sent" : "failed" })
      .eq("id", saved.id);

    if (!emailSent) {
      console.error("Email send failed:", ownerResult.reason);
    }

    // 7. Respond
    return res.status(200).json({
      success: true,
      message: "Message sent successfully! I'll reply within 24 hours.",
      data: { messageId: saved.id },
    });
  } catch (err) {
    console.error("Unhandled error:", err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
}
