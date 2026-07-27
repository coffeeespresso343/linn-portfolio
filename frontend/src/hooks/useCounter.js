import { useState, useEffect, useRef } from "react";

export function useCounter(target, inView) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const step = Math.ceil(target / 28);
    let v = 0;
    const t = setInterval(() => {
      v += step;
      if (v >= target) {
        v = target;
        clearInterval(t);
      }
      setCount(v);
    }, 40);
    return () => clearInterval(t);
  }, [inView, target]);

  return count;
}
