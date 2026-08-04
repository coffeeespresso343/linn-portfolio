import { useEffect, useRef } from "react";

const SkillBar = ({ name, pct, inView }) => {
  const barRef = useRef(null);

  useEffect(() => {
    if (inView && barRef.current) {
      barRef.current.style.width = pct + "%";
    }
  }, [inView, pct]);

  return (
    <div>
      <div className="flex justify-between mb-1.5 font-mono text-[0.8rem]">
        <span className="text-muted">{name}</span>
        <span className="text-accent">{pct}%</span>
      </div>
      <div className="h-1.25 bg-surface2 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full w-0 skill-fill rounded-full"
          style={{ background: "linear-gradient(90deg, #7c30ff, #00e5ff)" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
