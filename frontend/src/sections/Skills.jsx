import { skillCategories, learningObjectives } from "../data/skills";
import { useInView } from "../hooks/useInView";
import FadeIn from "../components/ui/FadeIn";
import SkillBar from "../components/SkillBar";
import { BookOpenCheck } from "lucide-react";

const SkillCategory = ({ Icon, label, skills }) => {
  const [ref, inView] = useInView(0.2);
  return (
    <div ref={ref} className="card card-hover p-6">
      <h3 className="flex items-center gap-2 font-display font-bold text-[0.98rem] mb-5">
        <span className="border border-purple/10 px-2 py-1 rounded-full bg-purple/20">
          <Icon size={18} />
        </span>
        {label}
      </h3>
      <div className="flex flex-col gap-3.5">
        {skills.map((s) => (
          <SkillBar key={s.name} {...s} inView={inView} />
        ))}
      </div>
    </div>
  );
};

const LearningItem = ({ Icon, label, sub, pct, done }) => {
  return (
    <div
      className={`flex gap-3 items-start p-3.5 rounded-xl bg-surface2 border
    ${done ? "border-green/40 opacity-70" : "border-white/[0.07]"}
    ${!done && pct > 0 ? "border-accent/20" : ""}`}
    >
      <span className="text-xl text-muted shrink-0 mt-0.5">
        <Icon />
      </span>
      <div className="flex-1">
        <strong className="block text-[0.85rem] mb-1">{label}</strong>
        <p className="text-[0.76rem] text-muted mb-2">{sub}</p>
        <div className="h-[3px] bg-white/[0.07] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: pct + "%",
              background: done
                ? "#00d084"
                : "linear-gradient(90deg,#7c30ff,#005eff)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-28 bg-bg2">
      <div className="max-w-[1180px] mx-auto px-10 md:px-14">
        <div className="section-label">// 02 - Skills</div>
        <h2 className="section-title">
          Tech <em className="text-accent">Arsenal</em>
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {skillCategories.map((cat, i) => (
            <FadeIn key={cat.id} delay={i * 80}>
              <SkillCategory {...cat} />
            </FadeIn>
          ))}

          {/* Learning Objectives */}
          <FadeIn className="md:col-span-2">
            <div className="card p-6">
              <h3 className="font-display font-bold text-[0.95rem] flex items-center gap-2 mb-5">
                <BookOpenCheck size={18} /> Learning Objectives
              </h3>
              <div className="grid sm:grid-cols-2 gap-3.5">
                {learningObjectives.map((obj) => (
                  <LearningItem key={obj.label} {...obj} />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Skills;
