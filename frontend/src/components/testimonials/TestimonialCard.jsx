import { QuoteIcon } from "lucide-react";
import Stars from "./Stars";
import Avatar from "./Avatar";
import { siTelegram } from "simple-icons";

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div
      className={`relative card p-7 flex flex-col gap-5 h-full transition-all duration-500
    ${
      isActive
        ? "border-purple/35 shadow-[0_0_60px_rgba(124,48,255,0.1)] scale-[1.01]"
        : "opacity-80 hover:opacity-100"
    }`}
    >
      {isActive && (
        <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full bg-linear-to-r from-purple via-accent to-purple" />
      )}

      <QuoteIcon className="w-8 h-8 text-purple absolute top-5 right-6" />

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
        <Avatar initials={testimonial.avatar} color={testimonial.color} />
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
