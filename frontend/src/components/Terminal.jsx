import { useTerminal } from "../hooks/useTerminal";

const Terminal = () => {
  const { cmd, output } = useTerminal();

  return (
    <div
      className="mt-6 md:mt-2 bg-surface border border-white/7 rounded-2xl overflow-hidden
    shadow-[0_26px_68px_rgba(0,0,0,0.55),0_0_44px_rgba(0,229,255,0.08)]"
    >
      {/* TItle bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.022] border-b border-white/7">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
      </div>

      {/* Body */}
      <div className="p-5 font-mono text-[0.78rem] min-h-44">
        <div className="mb-1.5">
          <span className="text-accent">$ </span>
          <span className="text-white">{cmd}</span>
          <span className="text-accent animate-blink">_</span>
        </div>
        <div className="mt-1.5 pl-4 leading-[1.9] text-muted space-y-0.5">
          {output.map((line, i) => (
            <div key={i} className={line.cls}>
              {line.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
