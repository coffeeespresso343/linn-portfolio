import { useState, useCallback, useEffect } from "react";

let toastFn = null;

export function showToast(msg, type = "info") {
  if (toastFn) toastFn(msg, type);
}

export default function Toast() {
  const [state, setState] = useState({ msg: "", type: "info", visible: false });

  const trigger = useCallback((msg, type) => {
    setState({ msg, type, visible: true });
    setTimeout(() => setState((s) => ({ ...s, visible: false })), 3400);
  }, []);

  useEffect(() => {
    toastFn = trigger;
  }, [trigger]);

  const colors = {
    success: "border-green/40 text-green",
    error: "border-red-400/40 text-red-400",
    info: "border-accent/30 text-accent",
  };

  return (
    <div
      className={`
      fixed bottom-7 right-7 z-[9999] bg-surface border rounded-xl
      px-5 py-3 font-mono text-sm pointer-events-none
      transition-all duration-500 ease-[cubic-bezier(.34,1.56,.64,1)]
      ${state.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      ${colors[state.type] || colors.info}
    `}
    >
      {state.msg}
    </div>
  );
}
