import { FileDown, MessageSquareCode } from "lucide-react";
import StatCounter from "../components/StatCounter";
import ProfileAvatar from "../components/ProfileAvatar";
import Terminal from "../components/Terminal";
import { useToast } from "../context/ToastContext";

const Hero = () => {
  const { showToast } = useToast();

  return (
    <section
      id="hero"
      className="relative min-h-screen grid md:grid-cols-2 items-center gap-16 px-6 md:px-12 pt-32 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 grid-bg pointer-events-none" />
      <div
        className="absolute w-140 h-140 rounded-full pointer-events-none z-0
                      bg-[radial-gradient(circle,rgba(124,48,255,0.07)_0%,transparent_80%)]
                      top-1/2 left-[35%] -translate-x-1/2 -translate-y-1/2"
      />

      {/* LEFT */}
      <div className="relative z-10 space-y-6">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 bg-green/8 border border-green/20
         text-green px-4 py-1.5 rounded-full font-mono text-[0.74rem]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-blink" />
          Avaliable for collaboration
        </div>

        {/* Title */}
        <h1
          className="font-display font-extrabold leading-[0.96] tracking-tight"
          style={{ fontSize: "clamp(3.6rem, 6.8vw, 7rem)" }}
        >
          <span className="block animate-[fadeUp_.85s_.04s_cubic-bezier(.16,1,.3,1)_both]">
            Linn
          </span>
          <span className="block animate-[fadeUp_.85s_.16s_cubic-bezier(.16,1,.3,1)_both]">
            Khant<span className="text-accent">.</span>
          </span>
        </h1>
        <p className="font-mono text-muted text-[0.8rem] tracking-widest animate-[fadeUp_.85s_.28s_cubic-bezier(.16,1,.3,1)_both]">
          IT Student&nbsp;.&nbsp;Full-Stack Enthusiast&nbsp;.&nbsp;Builder of
          Things
        </p>
        <p className="text-muted max-w-112.5 text-[1rem] animate-[fadeUp_.85s_.28s_cubic-bezier(.16,1,.3,1)_both]">
          Turning coffee and curiosity into clean code. Studying CS, shipping
          site projects, and looking for co-builders for the next big idea.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 animate-[fadeUp_.85s_.44s_cubic-bezier(.16,1,.3,1)_both]">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a
            href="#contact"
            className="btn-ghost flex items-center justify-center gap-1.5"
          >
            <MessageSquareCode size={16} />
            Let's Talk
          </a>

          {/* Add CV Later */}
          <a
            onClick={() =>
              showToast("Sorry, This action cannot be work yet.", "info")
            }
            href="#"
            className="btn-ghost flex items-center justify-center gap-1.5"
          >
            <FileDown size={16} /> Download CV
          </a>
        </div>

        {/* Stats */}
        <div className="animate-[fadeUp_.85s_.52s_cubic-bezier(.16,1,.3,1)_both]">
          <StatCounter />
        </div>
      </div>

      {/* RIGHT */}
      <div className="md:flex relative z-10 flex-col gap-5">
        <div className="relative flex justify-center">
          <div className="relative w-49 h-49">
            <div className="absolute -inset-1.5 rounded-full border-2 border-dashed border-accent/70 animate-spin-slow" />
            <div className="absolute -inset-0.5 rounded-full border border-accent/15" />
            <div
              className="w-49 h-49 rounded-full overflow-hidden relative z-10
             shadow-[0_0_0_4px_#080810, 0_0_0_6px_rgba(0,229,255,0.18),0_22px_56px_rgba(0,0,0,0.65)] bg-surface2"
            >
              <ProfileAvatar size={196} />
            </div>
            <div
              className="absolute bottom-1.5 right-1 z-20 bg-surface/80 border-2 border-green-500
            rounded-full px-2.5 py-0.5 font-mono text-[0.65rem] text-green
            flex items-center gap-1.5 whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green animate-blink" />
              Open to collab
            </div>
          </div>
        </div>
        <Terminal />
      </div>
    </section>
  );
};

export default Hero;
