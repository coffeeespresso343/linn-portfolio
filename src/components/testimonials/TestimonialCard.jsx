import { QuoteIcon } from "lucide-react";
import Stars from "./Stars";
import Avatar from "./Avatar";
import { siTelegram } from "simple-icons";
import { useEffect, useState } from "react";

const TestimonialCard = ({ testimonial, direction }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(timeout);
  }, [testimonial.id]);

  const slideIn =
    direction === "left"
      ? "translate-x-8 opacity-0"
      : "-translate-x-8 opacity-0";

  return (
    <div
      className={`
      relative card p-6 flex flex-col gap-5
      border-purple/30 bg-linear-to-br from-surface to-purple/3
      transition-all duration-500 ease-out shadow-[0_0_80px_rgba(124,48,255,0.1)]
      ${visible ? "translate-x-0 opacity-100" : slideIn}
    `}
    >
      <QuoteIcon className="w-8 h-8 text-purple absolute top-5 right-7" />

      <Stars count={5} />

      <blockquote className="text-[0.95rem] text-white/70 leading-[1.9] flex-1 italic font-light">
        "{testimonial.quote}"
      </blockquote>

      {/* Tag */}
      <div className="flex flex-wrap gap-1.5">
        {testimonial.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[0.65rem] px-2.5 py-1 rounded-full
                       bg-purple/10 border border-purple/20 text-purple/80"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="h-px bg-white/6" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <Avatar color={testimonial.color} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="font-display font-bold text-[0.95rem] text-white truncate">
              {testimonial.name}
            </p>
            {testimonial.telegram && (
              <a
                href={testimonial.telegram}
                target="_blank"
                rel="noreferrer"
                className="text-accent/80 hover:text-accent transition-colors shrink-0"
                title="telegram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 fill-current"
                >
                  <path d={siTelegram.path} />
                </svg>
              </a>
            )}
          </div>
          <p className="text-accent text-[0.78rem] font-mono truncate">
            {testimonial.role}
          </p>
          <p className="text-muted text-[0.72rem] truncate">
            {testimonial.context}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
