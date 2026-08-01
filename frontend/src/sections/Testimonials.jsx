import { useEffect, useRef, useState } from "react";
import FeatureCard from "../components/testimonials/FeatureCard";
import TestimonialCard from "../components/testimonials/TestimonialCard";
import FadeIn from "../components/ui/FadeIn";
import { testimonials } from "../data/testimonials";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const Testimonials = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("left");
  const [rendered, setRendered] = useState(true);
  const intervalRef = useRef(null);
  const total = testimonials.length;

  const featured = testimonials[0];

  const goTo = (nextIndex, direction) => {
    if (nextIndex === activeIndex) return;
    setDirection(direction);
    setRendered(false);
    setTimeout(() => {
      setActiveIndex(nextIndex);
      setRendered(true);
    }, 180);
  };

  const prev = () => {
    setAutoPlay(false);
    goTo((activeIndex - 1 + total) % total, "right");
  };

  const next = () => {
    setAutoPlay(false);
    goTo((activeIndex + 1) % total, "left");
  };

  const dotClick = (index) => {
    setAutoPlay(false);
    goTo(index, index > activeIndex ? "left" : "right");
  };

  useEffect(() => {
    if (!autoPlay) return;
    intervalRef.current = setInterval(() => {
      setDirection("left");
      setRendered(false);
      setTimeout(() => {
        setActiveIndex((i) => (i + 1) % total);
        setRendered(true);
      }, 180);
    }, 4500);

    return () => clearInterval(intervalRef.current);
  }, [autoPlay, total]);

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-28 bg-bg2">
      <div className="max-w-295 mx-auto px-10 md:px-14">
        <FadeIn>
          <div className="section-label">// 06 - Testimonials</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <h2 className="section-title mb-0">
              What People <em className="text-accent">Say About Me</em>
            </h2>

            <div className="flex items-center gap-6 pb-1 shrink-0">
              <div className="text-center">
                <p className="font-display font-extrabold text-2xl text-accent leading-none">
                  {testimonials.length}
                </p>
                <p className="font-mono text-[0.65rem] text-muted tracking-widest mt-1">
                  REVIEWS
                </p>
              </div>
              <div className="w-px h-8 bg-white/[0.07]" />
              <div className="text-center">
                <p className="font-display font-extrabold text-2xl text-accent leading-none">
                  5.0
                </p>
                <p className="font-mono text-[0.65rem] text-muted tracking-widest mt-1">
                  AVG RATING
                </p>
              </div>

              <div className="w-px h-8 bg-white/[0.07]" />

              <div className="text-center">
                <p className="font-display font-extrabold text-2xl text-accent leading-none">
                  100%
                </p>
                <p className="font-mono text-[0.65rem] text-muted tracking-widest mt-1">
                  RECOMMEND
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-5 items-start mb-5">
          <FadeIn>
            <FeatureCard testimonial={featured} />
          </FadeIn>

          {/* Card + nav*/}
          <FadeIn delay={80}>
            <div className="relative">
              <div className="min-h-95">
                {rendered && (
                  <TestimonialCard
                    key={activeIndex}
                    testimonial={current}
                    direction={direction}
                  />
                )}
              </div>

              {/* Prev + Next */}
              <div className="flex items-center justify-between mt-8">
                {/* Prev */}
                <button
                  onClick={prev}
                  className="group flex items-center gap-2 font-mono text-[0.78rem] 
                           text-muted scale-90 hover:scale-100 hover:text-accent transition-all duration-200"
                >
                  <span
                    className="w-9 h-9 rounded-full border border-white/[0.07]
                                 flex items-center justify-center
                                 group-hover:border-accent/40 group-hover:bg-accent/5
                                 transition-all duration-200"
                  >
                    <ChevronLeft size={24} />
                  </span>
                </button>

                {/* Dot indicators + counter */}
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => dotClick(i)}
                        className={`transition-all duration-300 rounded-full
                                  ${
                                    activeIndex === i
                                      ? "w-6 h-2 bg-accent"
                                      : "w-2 h-2 bg-white/20 hover:bg-white/50"
                                  }`}
                        aria-label={`Go to review ${i + 1}`}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-[0.65rem] text-dim tracking-widest">
                    {String(activeIndex + 1).padStart(2, "0")} /{" "}
                    {String(total).padStart(2, "0")}
                  </span>
                </div>

                {/* Next */}
                <button
                  onClick={next}
                  className="group flex items-center gap-2 font-mono text-[0.78rem]
                text-muted scale-90 hover:scale-100 hover:text-accent transition-all duration-200"
                >
                  <span
                    className="w-9 h-9 rounded-full border border-white/[0.07]
                                 flex items-center justify-center
                                 group-hover:border-accent/40 group-hover:bg-accent/5
                                 transition-all duration-200"
                  >
                    <ChevronRight size={24} />
                  </span>
                </button>
              </div>

              {/* Autoplay toggle */}
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setAutoPlay((p) => !p)}
                  className="group flex items-center justify-center w-16 h-9 rounded-full border border-white/[0.07]
                   text-dim scale-95 hover:text-accent hover:border-accent/40 hover:scale-100  transition-all duration-200"
                >
                  {autoPlay ? <Pause /> : <Play />}
                </button>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={160}>
          <div
            className="mt-14 rounded-2xl border border-purple/20 p-7 
          bg-linear-to-br from-purple/6 to-transparent 
          flex flex-col sm:flex-row items-center justify-between gap-5"
          >
            <div>
              <h3 className="font-display font-bold text-[1.05rem] mb-1">
                Worked with me? Leave a review!
              </h3>
              <p className="text-muted text-[0.85rem]">
                If we've collaborated, studied, or built something together, I'd
                love to hear about it!
              </p>
            </div>
            <a
              href="#contact"
              className="btn-primary whitespace-nowrap shrink-0"
            >
              Leave a Review
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Testimonials;
