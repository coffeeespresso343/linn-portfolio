import { useRef, useState } from "react";
import {
  HeartHandshake,
  Loader2,
  LucideMessageSquareCheck,
  LucideSend,
  Mail,
  MessageSquare,
  User2,
} from "lucide-react";
import { useToast } from "../context/ToastContext";
import { sendContactMessage } from "../api/contactApi";

const SUBJECTS = [
  { value: "collab", label: "Project Collaboration" },
  { value: "discuss", label: "Code Discussion" },
  { value: "study", label: "Study Together" },
  { value: "hire", label: "Job / Internship" },
  { value: "other", label: "Other" },
];

const INITIAL = {
  senderName: "",
  senderEmail: "",
  subject: "",
  message: "",
  wantCollab: false,
};
const INITIAL_ERRORS = {
  senderName: "",
  senderEmail: "",
  subject: "",
  message: "",
};

const inputCls = `w-full bg-surface2 border border-white/[0.07] rounded-lg px-3.5 py-2.5
                  text-[0.92rem] text-white outline-none
                  transition-all duration-200
                  focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,229,255,0.08)]
                  placeholder:text-muted/60`;

function validate(data) {
  const errs = { ...INITIAL_ERRORS };
  if (!data.senderName.trim()) errs.senderName = "Please enter your name";
  if (!data.senderEmail.trim())
    errs.senderEmail = "Please enter your email address";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.senderEmail))
    errs.senderEmail = "Please enter a valid email";
  if (!data.subject) errs.subject = "Please choose a topic";
  if (!data.message.trim()) errs.message = "Message cannot be empty";
  else if (data.message.trim().length < 10)
    errs.message = "Message too short (min 10 chars)";
  return errs;
}

const ContactForm = () => {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [status, setStatus] = useState("idle"); //idle | sending | success
  const [charLen, setCharLen] = useState(0);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subRef = useRef(null);
  const msgRef = useRef(null);

  const { showToast } = useToast();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "message") setCharLen(Math.min(value.length, 500));
    setForm((f) => ({
      ...f,
      [name]:
        type === "checkbox"
          ? checked
          : value.slice(0, name === "message" ? 500 : undefined),
    }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = validate(form);
    if (Object.values(errs).some(Boolean)) {
      setErrors(errs);

      if (errs.senderName) nameRef.current?.focus();
      else if (errs.senderEmail) emailRef.current?.focus();
      else if (errs.subject) subRef.current?.focus();
      else msgRef.current?.focus();

      showToast("Please fix the highlighted fields", "error");
      return;
    }

    setStatus("sending");
    try {
      await sendContactMessage(form);
      setStatus("success");
      showToast("Message sent successfully! Thank You", "success");
    } catch (err) {
      console.error("Contact error:", err);
      setStatus("error");
      showToast(
        "Something went wrong. Please try again or contact me directly",
        "error",
      );
    }
  };

  const reset = () => {
    setForm(INITIAL);
    setErrors(INITIAL_ERRORS);
    setStatus("idle");
    setCharLen(0);
  };

  if (status === "success") {
    return (
      <div className="flex items-center flex-col">
        <div className="mb-4 flex items-center justify-center text-emerald-500">
          <LucideMessageSquareCheck size={32} />
        </div>
        <h3 className="font-display font-bold text-[1.35rem] mb-2">
          Message Sent!
        </h3>
        <p className="text-muted mb-6 text-center">
          Thanks for reaching out! I'll reply within 24 hours.
        </p>
        <button onClick={reset} className="btn-ghost">
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {/* Name + Email row */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor=""
            className="font-mono text-[0.72rem] text-muted tracking-wide"
          >
            Your Name *
          </label>
          <div className="relative">
            <User2
              size={16}
              className="pointer-events-none absolute text-muted left-3 top-1/2 -translate-y-1/2"
            />
            <input
              ref={nameRef}
              type="text"
              name="senderName"
              value={form.senderName}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`${inputCls} pl-9 ${
                errors.senderName ? "focus:border-red-400" : ""
              }`}
            />
          </div>
          {errors.senderName && (
            <span className="font-mono text-[0.7rem] text-red-400">
              {errors.senderName}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor=""
            className="font-mono text-[0.72rem] text-muted tracking-wide"
          >
            Your Email *
          </label>
          <div className="relative">
            <Mail
              size={16}
              className="pointer-events-none absolute text-muted left-3 top-1/2 -translate-y-1/2"
            />
            <input
              ref={emailRef}
              type="email"
              name="senderEmail"
              value={form.senderEmail}
              onChange={handleChange}
              placeholder="you@gmail.com"
              className={`${inputCls} pl-9 ${
                errors.senderEmail ? "focus:border-red-400" : ""
              }`}
            />
          </div>
          {errors.senderEmail && (
            <span className="font-mono text-[0.7rem] text-red-400">
              {errors.senderEmail}
            </span>
          )}
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor=""
          className="font-mono text-[0.72rem] text-muted tracking-wide"
        >
          Subject *
        </label>
        <div className="relative">
          <HeartHandshake
            size={16}
            className="pointer-events-none absolute text-muted left-3 top-1/2 -translate-y-1/2"
          />
          <select
            ref={subRef}
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={`${inputCls} ${
              errors.subject ? "focus:border-red-400" : ""
            } appearance-none cursor-pointer pl-9`}
          >
            <option value="">- Choose a topic -</option>
            {SUBJECTS.map((sub) => (
              <option key={sub.value} value={sub.value}>
                {sub.label}
              </option>
            ))}
          </select>
        </div>
        {errors.subject && (
          <span className="font-mono text-[0.7rem] text-red-400">
            {errors.subject}
          </span>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor=""
          className="font-mono text-[0.72rem] text-muted tracking-wide"
        >
          Message *
        </label>
        <div className="relative">
          <MessageSquare
            size={16}
            className="pointer-events-none absolute text-muted left-3 top-5.5 -translate-y-1/2"
          />
          <textarea
            ref={msgRef}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your idea, project, or just say hello..."
            rows={6}
            className={`${inputCls} ${errors.message ? "focus:border-red-400" : ""} resize-y min-h-32 pl-10`}
          />
        </div>
        <div className="flex justify-between">
          {errors.message ? (
            <span className="font-mono text-[0.7rem] text-red-400">
              {errors.message}
            </span>
          ) : (
            <span />
          )}
          <span
            className={`font-mono text-[0.68rem] ${
              charLen > 450 ? "text-yellow" : "text-dim"
            }`}
          >
            {charLen} /500
          </span>
        </div>
      </div>

      {/* Checkbox */}
      <label className="flex items-center gap-2.5 cursor-pointer">
        <div className="relative w-4 h-4 shrink-0">
          <input
            type="checkbox"
            name="wantCollab"
            checked={form.wantCollab}
            onChange={handleChange}
            className="sr-only peer"
          />
          <div
            className="w-4 h-4 rounded border-2 border-white/[0.07]
                                      peer-checked:bg-accent peer-checked:border-accent
                                      transition-all duration-200 flex items-center justify-center"
          >
            {form.wantCollab && (
              <span className="text-bg text-[10px] font-bold">✓</span>
            )}
          </div>
        </div>
        <span className="text-[0.84rem] text-muted">
          I'm also interested in collaborating on a project
        </span>
      </label>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-3.5 rounded-lg font-mono font-bold text-[0.84rem] tracking-wide
                               text-white transition-all duration-200
                               bg-linear-to-r from-purple to-accent
                               hover:-translate-y-0.5 hover:shadow-[0_13px_42px_rgba(124,48,255,0.36)]
                               disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
      >
        {status === "sending" ? (
          <span className="flex items-center justify-center gap-1">
            <Loader2 size={18} className="animate-spin" />
            Sending…
          </span>
        ) : (
          <span className="flex items-center justify-center gap-1">
            Send Message
            <LucideSend size={18} />
          </span>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
