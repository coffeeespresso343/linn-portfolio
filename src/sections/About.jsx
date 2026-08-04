import {
  ArrowRight,
  Clock3,
  Coffee,
  Flame,
  GraduationCap,
  Lightbulb,
  LocationEdit,
  School,
  Users,
} from "lucide-react";
import FadeIn from "../components/ui/FadeIn";
import ProfileAvatar from "../components/ProfileAvatar";

import { tickerItems } from "../data/skills";

const TICKER = [...tickerItems, ...tickerItems];

const TAGS = [
  { id: 1, Icon: GraduationCap, label: "CS Student" },
  { id: 2, Icon: Lightbulb, label: "Problem Solver" },
  { id: 3, Icon: Users, label: "Team Player" },
  { id: 4, Icon: Flame, label: "Fast Learner" },
  { id: 5, Icon: Coffee, label: "Coffee Addict" },
];

const INFO = [
  { id: 1, Icon: LocationEdit, label: "Yangon, Myanmar" },
  {
    id: 2,
    Icon: School,
    label: "Royal Myanmar International of Technology",
  },
  { id: 3, Icon: Clock3, label: "Class of 2025" },
];

const About = () => {
  return (
    <section id="about" className="py-28 bg-bg">
      <div className="max-w-295 mx-auto px-6 md:px-12">
        <div className="section-label">// 01 - About</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <FadeIn>
            <h2 className="section-title">
              Passionate about <br />
              <em className="text-accent not-italic">building the future</em>
            </h2>
            <p className="text-muted mb-4 text-[1rem]">
              I'm an IT student with a deep obsession for creating software that
              matters. From backend APIs to pixel-perfect frontends, I love the
              full stack - and especially those late-night debugging sessions
              that turn into breakthroughs.
            </p>
            <p className="text-muted text-[1rem]">
              When I'm not coding, I'm reading about system design, tickering
              with new frameworks, or convincing my friends to build something
              wild together.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {TAGS.map(({ id, Icon, label }) => (
                <div
                  key={id}
                  className="flex items-center gap-1.5 bg-surface border border-accent/25 md:border-white/[0.07] px-3 py-1
                   rounded-full text-[0.78rem] text-muted hover:border-accent/25 hover:text-white transition-colors"
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Profile card + ticker */}
          <FadeIn delay={120}>
            <div className="card card-hover p-4 flex gap-4 items-center mb-4">
              <div
                className="w-17 h-17 rounded-full overflow-hidden shrink-0 
              border-2 border-accent/28 bg-surface2"
              >
                <ProfileAvatar size={68} />
              </div>
              <div>
                <h3 className="font-display font-bold text-[1rem]">
                  Linn Khant
                </h3>
                <p className="text-muted text-[0.8rem] mt-0.5">IT Student</p>
                <div className="mt-3 flex flex-col gap-1.5">
                  {INFO.map(({ id, Icon, label }) => (
                    <div
                      key={id}
                      className="flex items-center gap-2 text-[0.78rem] text-muted"
                    >
                      <Icon size={14} />
                      <span>{label}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-[0.78rem] text-green font-medium ">
                    <span className="h-1.5 w-1.5 bg-green rounded-full animate-blink" />
                    <span>Open to collabs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ticker */}
            <div className="bg-surface border border-white/[0.07] rounded-xl p-4 overflow-hidden">
              <p className="flex items-center gap-1.5 font-mono text-[0.66rem] text-dim tracking-[2px] mb-3">
                Currently learning
                <ArrowRight size={14} />
              </p>
              <div className="flex gap-4 animate-ticker whitespace-nowrap">
                {TICKER.map((t, i) => (
                  <span
                    key={i}
                    className="font-mono text-[0.75rem] text-accent px-3 py-1
                  bg-accent/[0.07] rounded-full whitespace-nowrap"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
