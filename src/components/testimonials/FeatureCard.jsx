import { QuoteIcon } from "lucide-react";
import Stars from "./Stars";
import Avatar from "./Avatar";
import { siTelegram } from "simple-icons";

const FeatureCard = ({ testimonial }) => {
  return (
    <div
      className="relative card p-6 flex flex-col gap-6 h-full
                    border-purple/30 bg-linear-to-br from-surface to-purple/4
                    shadow-[0_0_80px_rgba(124,48,255,0.1)]"
    >
      <div className="absolute top-0 left-3 right-2 h-0.5 rounded-t-2xl bg-linear-to-r from-purple via-accent to-purple" />

      {/* Badge */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.65rem] tracking-widest text-purple bg-purple/10 border border-purple/20 px-3 py-1 rounded-full">
          FEATURED REVIEW
        </span>
        <Stars />
      </div>

      <QuoteIcon className="h-14 w-14 text-accent" />

      <blockquote className="text-[1.05rem] text-white/80 leading-[1.9] flex-1 italic font-light">
        "{testimonial.quote}"
      </blockquote>

      <div className="flex flex-wrap gap-2">
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
      <div className="flex items-center gap-4">
        <Avatar color={testimonial.color} size="lg" />
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <p className="font-display font-bold text-[1.05rem] text-white">
              {testimonial.name}
            </p>
            {testimonial.telegram && (
              <a
                href={testimonial.telegram}
                target="_blank"
                rel="noreferrer"
                className="text-accent/80 hover:text-accent transition-colors"
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
          <p className="text-[0.82rem] text-accent font-mono">
            {testimonial.role}
          </p>
          <p className="text-[0.76rem] text-muted">{testimonial.context}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
