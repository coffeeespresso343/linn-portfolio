import { education } from "../data/education";
import FadeIn from "../components/ui/FadeIn";

const badgeStyle = {
  current: "bg-accent/[0.08] text-accent",
  cert: "bg-yellow/[0.08] text-yellow",
  school: "bg-surface2 text-muted",
};

const TimelineItem = ({ item }) => {
  return (
    <FadeIn>
      <div className="relative pl-9 mb-11">
        <div
          className={`absolute left-0 top-2 w-5 h-5 rounded-full border-2 transition-all
           ${
             item.current
               ? "border-accent bg-accent/16 shadow-[0_0_13px_rgba(0,229,255,0.32)]"
               : "border-white/[0.07] bg-surface"
           }`}
        />

        <div className="card p-6 hover:border-accent/18 transition-all duration-300">
          <p className="font-mono text-[0.72rem] text-accent tracking-wide mb-2">
            {item.period}
          </p>
          <span
            className={`inline-block font-mono text-[0.65rem] px-3 py-0.5 rounded-full mb-3 ${
              badgeStyle[item.badgeType]
            }`}
          >
            {item.badge}
          </span>
          <h3 className="font-display font-bold text-[1.02rem] leading-snug mb-1">
            {item.degree}
          </h3>
          <p className="font-mono text-[0.8rem] text-accent mb-2">
            {item.school}
          </p>
          <p className="text-[0.86rem] text-muted leading-relaxed">
            {item.desc}
          </p>
          {item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {item.tags.map((t) => (
                <span key={t} className="tag-pill">
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </FadeIn>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-28 bg-bg2">
      <div className="max-w-295 mx-auto px-10 md:px-14">
        <div className="section-label">// 04 - Educations</div>
        <h2 className="section-title">
          My <em>Journey</em>
        </h2>

        <div className="relative timeline-line pl-0">
          {education.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
