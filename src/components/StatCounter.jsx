import { useInView } from "../hooks/useInView";
import { useCounter } from "../hooks/useCounter";

function Counter({ target, label }) {
  const [ref, inView] = useInView(0.5);
  const count = useCounter(target, inView);
  return (
    <div ref={ref} className="flex flex-col gap-1">
      <span className="font-display font-extrabold text-[2rem] text-accent leading-none">
        {count}
      </span>
      <span className="font-mono text-[0.68rem] text-muted tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
}

const StatCounter = () => {
  return (
    <div className="flex items-center gap-7">
      <Counter target={5} label="Projects Done" />
      <div className="w-px h-9 bg-white/7" />
      <Counter target={8} label="Technologies" />
      <div className="w-px h-9 bg-white/7" />
      <Counter target={4} label="Team Projects" />
    </div>
  );
};

export default StatCounter;
