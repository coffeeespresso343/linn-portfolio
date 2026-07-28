import {
  BookOpenCheck,
  Copy,
  Handshake,
  MessageSquareCode,
  MoveUpRight,
  Send,
  TrophyIcon,
} from "lucide-react";
import FadeIn from "../components/ui/FadeIn";

const COLLAB_CARDS = [
  {
    Icon: MessageSquareCode,
    title: "Code & Discuss",
    desc: "Weekly virtual sessions - review each other's code, share learning, debug together, and explore new technologies.",
    cta: "Join Discussion",
  },
  {
    Icon: TrophyIcon,
    title: "Start a Project",
    desc: "Got an idea but need a backend ot full-stack partner? Open to co-building startups.",
    cta: "Pitch Your Idea",
    highlight: true,
  },
  {
    Icon: BookOpenCheck,
    title: "Study Together",
    desc: "Preparing for technical interviews or certifications? Want an accountability partner? Let's study and grow together.",
    cta: "Let's Study",
  },
];

const SHARE = [
  { Icon: Copy, label: "Copy Link", action: "copy" },
  { Icon: Send, label: "Share on Telegram", acttion: "telegram" },
];
const Collab = () => {
  return (
    <section id="collab" className="py-28 bg-bg">
      <div className="max-w-295 mx-auto px-10 md:px-14">
        <div className="section-label">// 05 - Collaborate</div>
        <h2 className="section-title">
          Let's Build <em>Together</em>
        </h2>
        <p className="text-muted text-[1rem] max-w-140 mb-11">
          Always looking for friends to discuss ideas, code together, or
          co-found the next project. Designer, developer, or just someone with a
          great idea - let's connect.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4.5 mb-9">
          {COLLAB_CARDS.map((card, i) => (
            <FadeIn key={card.title} delay={i * 80}>
              <div
                className={`card card-hover p-7 flex flex-col gap-3 h-full
                ${
                  card.highlight
                    ? "border-purple/30 bg-linear-to-br from-surface to-purple/4"
                    : ""
                }`}
              >
                <div className="flex items-center gap-2 text-[1.05rem] font-display font-bold">
                  <span className="bg-accent/10 border border-accent/16 rounded-xl px-2 py-1 text-accent">
                    {<card.Icon size={15} />}
                  </span>
                  <h3>{card.title}</h3>
                </div>
                <p className="text-[0.85rem] text-muted flex-1 leading-relaxed">
                  {card.desc}
                </p>
                <a
                  href="#contact"
                  className="flex items-center gap-2 font-mono text-[0.75rem] text-accent mt-auto pt-1.5
                hover:tracking-wider transition-all duration-200"
                >
                  {card.cta} <MoveUpRight size={14} />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Invite box */}
        <FadeIn>
          <div
            className="rounded-2xl border border-purple/24 p-7 md:p-8
          bg-linear-to-br from-purple/8 to-accent/3
          flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
          >
            <div>
              <h3 className="flex items-center gap-2 font-display font-bold text-[1.02rem] mb-1">
                <span className="bg-accent/10 border border-accent/16 rounded-xl px-2 py-1 text-accent">
                  <Handshake size={15} />
                </span>
                Invite a Friend
              </h3>

              <p className="text-muted text-[0.85rem]">
                Know someone who'd love to collaborate? Share this portfolio.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {SHARE.map((s) => (
                <button
                  key={s.action}
                  // onClick={} later
                  className="flex items-center gap-1 px-4 py-2 rounded-lg border border-white/[0.07] text-muted bg-surface
                  font-mono text-[0.74rem] transition-all duration-200 hover:border-accent/30 hover:text-accent hover:-translate-y-0.5"
                >
                  {<s.Icon size={14} />}
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Collab;
