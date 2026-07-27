import { useEffect, useRef, useState } from "react";

const SEQUENCES = [
  {
    cmd: "whoami",
    lines: [
      { text: "-> linn_khant", cls: "text-green-400" },
      { text: "   Role: IT Student & Developer", cls: "text-white/60" },
      { text: "   Status: Building cool stuff", cls: "text-accent" },
    ],
  },
  {
    cmd: "ls ./skills",
    lines: [
      { text: "Java   Spring-Boot   MySQL   React", cls: "text-accent" },
      { text: "JavaScript   OAuth   Git   Appwrite", cls: "text-accent" },
      { text: "8 skills loaded", cls: "text-green-400" },
    ],
  },
  {
    cmd: "git log --oneline -4",
    lines: [
      {
        text: "a3f8d2c  feat: Nexora Movie App",
        cls: "text-yellow-400",
      },
      { text: "9c21b1e  feat: Linn Cafe", cls: "text-white/60" },
      { text: "4e7a093  feat: VORO Men Fashion", cls: "text-white/60" },
      { text: "11f0c9e   feat: Urban Mart", cls: "text-white/60" },
    ],
  },
  {
    cmd: "cat availability.json",
    lines: [
      { text: "{", cls: "text-white/60" },
      { text: '   "open_to_collab": true,', cls: "text-green-400" },
      { text: '   "response_time": "< 24h"', cls: "text-accent" },
      { text: "}", cls: "text-white/60" },
    ],
  },
];

export function useTerminal() {
  const [cmd, setCmd] = useState("");
  const [output, setOutput] = useState([]);

  const sequenceIndex = useRef(0);
  const typingInterval = useRef(null);
  const timers = useRef([]);

  useEffect(() => {
    const addTimer = (id) => {
      timers.current.push(id);
      return id;
    };

    const clearAllTimers = () => {
      if (typingInterval.current) {
        clearInterval(typingInterval.current);
      }

      timers.current.forEach(clearTimeout);
      timers.current = [];
    };

    const runSequence = () => {
      clearAllTimers();

      const sequence = SEQUENCES[sequenceIndex.current % SEQUENCES.length];

      setCmd("");
      setOutput([]);

      let charIndex = 0;

      typingInterval.current = setInterval(() => {
        charIndex++;

        setCmd(sequence.cmd.slice(0, charIndex));

        if (charIndex >= sequence.cmd.length) {
          clearInterval(typingInterval.current);

          addTimer(
            setTimeout(() => {
              sequence.lines.forEach((line, index) => {
                addTimer(
                  setTimeout(() => {
                    setOutput((prev) => [...prev, line]);
                  }, index * 140),
                );
              });

              sequenceIndex.current++;

              addTimer(setTimeout(runSequence, 3600));
            }, 380),
          );
        }
      }, 60);
    };

    runSequence();

    return clearAllTimers;
  }, []);

  return { cmd, output };
}
