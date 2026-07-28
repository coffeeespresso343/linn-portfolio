import FadeIn from "../components/ui/FadeIn";
import ContactForm from "../components/ContactForm";
import github from "../assets/icons/github.svg";
import fb from "../assets/icons/fb.svg";
import tele from "../assets/icons/tele.svg";
import email from "../assets/icons/email.svg";

const SOCIAL_LINKS = [
  {
    label: "Email",
    value: "linnkhant343@gmail.com",
    href: "mailto:linnkhant343@gmail.com",
    icon: email,
  },
  {
    label: "GitHub",
    value: "@coffeeespresso343",
    href: "https://github.com/coffeeespresso343",
    icon: github,
  },
  {
    label: "Facebook",
    value: "@linnkhant404",
    href: "https://linkedin.com/in/linnkhant",
    icon: fb,
  },
  {
    label: "Telegram",
    value: "@linnkhant343",
    href: "https://t.me/linnkhant343",
    icon: tele,
  },
];

const Contact = () => {
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
          <FadeIn delay={100}>
            <div className="flex flex-col gap-4">
              <div className="card p-6">
                <h3 className="font-display font-bold text-[0.93rem] mb-4">
                  Other ways to reach me
                </h3>
                <div className="flex flex-col gap-2.5">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 p-2.5 rounded-lg border border-white/[0.07]
                      hover:border-accent/26 hover:bg-accent/[0.028] transition-all duration-200 text-[0.82rem]"
                    >
                      <span className="h-6 w-6 bg-white rounded-full">
                        <img
                          src={link.icon}
                          alt={link.icon}
                          className="rounded-full ring-[0.5px] ring-white object-cover"
                        />
                      </span>
                      <div>
                        <strong className="block text-[0.75rem] mb-0.5">
                          {link.label}
                        </strong>
                        <span className="text-muted text-[0.74rem]">
                          {link.value}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="card p-5 border-green/17 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green animate-blink shrink-0" />
                <div>
                  <strong className="block text-[0.83rem] mb-0.5">
                    Typically responds in
                  </strong>
                  <p className="font-mono text-[0.74rem] text-muted">
                    &lt; 24 hours on weekdays
                  </p>
                </div>
              </div>

              <div className="hidden lg:block card p-5 border-purple/20 bg-linear-to-br from-surface to-purple/4">
                <p className="font-mono text-[0.7rem] text-dim tracking-widest mb-1.5">
                  QUICK SHORTCUT
                </p>
                <p className="text-[0.8rem] text-muted">
                  Press{" "}
                  <kbd className="px-1.5 py-0.5 bg-surface2 border border-white/[0.07] rounded font-mono text-[0.7rem] text-accent">
                    Ctrl
                  </kbd>
                  {" + "}
                  <kbd className="px-1.5 py-0.5 bg-surface2 border border-white/[0.07] rounded font-mono text-[0.7rem] text-accent">
                    K
                  </kbd>
                  {" to jump here from anywhere "}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
