import {
  BookOpenCheck,
  Copy,
  Handshake,
  MessageSquareCode,
  MoveUpRight,
  TrophyIcon,
} from "lucide-react";
import FadeIn from "../components/ui/FadeIn";
import { siFacebook } from "simple-icons";
import { useToast } from "../context/ToastContext";

const FACEBOOK_APP_ID = import.meta.env.VITE_FACEBOOK_APP_ID;
const URL = "https://linnkhant.vercel.app";

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
  const { showToast } = useToast();

  const shareOnFacebook = () => {
    const shareUrl =
      `https://www.facebook.com/dialog/share` +
      `?app_id=${encodeURIComponent(FACEBOOK_APP_ID)}` +
      `&href=${encodeURIComponent(URL)}`;

    window.open(shareUrl, "_blank", "width=700,height=600,noopener,noreferrer");
  };

  const copyLink = () => {
    navigator.clipboard
      .writeText(URL)
      .then(() => showToast("Link copied to clipboard!", "success"));
  };

  return (
    <section id="collab" className="py-28 bg-bg">
      <div className="max-w-295 mx-auto px-10 md:px-14">
        <div className="section-label">// 05 - Collaborate</div>
        <h2 className="section-title">
          Let's Build <em className="text-accent">Together</em>
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
                  <span className="bg-accent/10 border border-accent/16 rounded-xl px-3 py-2 text-accent">
                    {<card.Icon size={15} />}
                  </span>
                  <h3>{card.title}</h3>
                </div>
                <p className="text-[0.85rem] text-muted flex-1 leading-relaxed">
                  {card.desc}
                </p>
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 font-mono text-[0.75rem] text-accent mt-auto pt-1.5
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
                <span className="bg-accent/10 border border-accent/16 rounded-xl px-3 py-2 text-accent">
                  <Handshake size={15} />
                </span>
                Invite a Friend
              </h3>

              <p className="mt-3 text-muted text-[0.85rem]">
                Know someone who'd love to collaborate? Share this portfolio.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={copyLink}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/[0.07] text-muted bg-surface
                  font-mono text-[0.74rem] transition-all duration-200 hover:border-accent/30 hover:text-accent hover:-translate-y-0.5"
              >
                <Copy size={14} />
                Copy Link
              </button>
              <button
                onClick={shareOnFacebook}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-white/[0.07] text-muted bg-surface
                  font-mono text-[0.74rem] transition-all duration-200 hover:border-accent/30 hover:text-accent hover:-translate-y-0.5"
              >
                <span className="flex items-center justify-center ">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="size-4 transition-colors duration-200"
                  >
                    <path d={siFacebook.path} />
                  </svg>
                </span>
                Share on Facebook
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Collab;
