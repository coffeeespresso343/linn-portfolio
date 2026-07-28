import { useState } from "react";
import FadeIn from "../components/ui/FadeIn";
import { LucideMessageSquareCheck } from "lucide-react";
import ContactForm from "../components/ContactForm";

const SOCIAL_LINKS = [
  {
    label: "Email",
    value: "linnkhant343@gmail.com",
    href: "mailto:linnkhant343@gmail.com",
  },
  {
    label: "GitHub",
    value: "@coffeeespresso343",
    href: "https://github.com/coffeeespresso343",
  },
  {
    label: "LinkedIn",
    value: "/in/linnkhant",
    href: "https://linkedin.com/in/linnkhant",
  },
  {
    label: "Telegram",
    value: "@linnkhant343",
    href: "https://t.me/linnkhant343",
  },
];

const inputCls = `w-full bg-surface2 border border-white/[0.07] rounded-lg px-3.5 py-2.5
                  text-[0.92rem] text-white outline-none
                  transition-all duration-200
                  focus:border-accent focus:shadow-[0_0_0_3px_rgba(0,229,255,0.08)]
                  placeholder:text-muted/60`;

const Contact = () => {
  const [status, setStatus] = useState("idle");

  return (
    <section id="contact" className="py-28 bg-bg2">
      <div className="max-w-295 mx-auto px-10 md:px-14">
        <div className="section-label">// 06 - Contact</div>
        <h2 className="section-title">
          Send Me a <em className="text-accent">Message</em>
        </h2>
        <p className="text-muted text-[0.96rem] -mt-8 mb-11">
          Fill the form below and it lands directly in my inbox.
        </p>

        <div className="grid md:grid-cols-[1fr_320px] gap-11 items-start">
          {/* Form */}
          <FadeIn>
            <div className="card p-8 md:p-9">
              <ContactForm />
            </div>
          </FadeIn>

          {/* Sidebar */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
