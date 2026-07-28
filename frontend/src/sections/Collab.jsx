import {
  BookOpenCheck,
  MessageSquareCode,
  MoveUpRight,
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
                  <span className="bg-surface border rounded-xl px-2 py-1 text-purple">
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
      </div>
    </section>
  );
};

export default Collab;
