import { useState } from "react";
import FeatureCard from "../components/testimonials/FeatureCard";
import TestimonialCard from "../components/testimonials/TestimonialCard";
import FadeIn from "../components/ui/FadeIn";
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const featured = testimonials[0];
  const rest = testimonials.slice(1);

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

        <div className="grid lg:grid-cols[1fr_1fr] gap-5 items-start mb-5">
          <FadeIn>
            <FeatureCard testimonial={featured} />
          </FadeIn>

          {/* Rotating cards */}
          <FadeIn delay={100}>
            <div className="flex flex-col gap-4">
              {rest.map((t, i) => (
                <div key={i}>
                  <TestimonialCard
                    testimonial={t}
                    isActive={i === activeIndex}
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Dot indicators + autoplay status */}
        <FadeIn delay={150}>
          <div>
            {rest.map((_, i) => (
              <button
                key={i}
                className="w-6 h-6 bg-white/20 hover:bg-white/40"
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}

            <div className="w-px h-4 bg-white/[0.07] mx-1" />
            <button>{autoPlay ? "Autoplay On" : "Autoplay Off"}</button>
          </div>
        </FadeIn>

        {/* Bottom CTA */}
        <FadeIn delay={200}>
          <div>
            <div>
              <h3>Worked with me? Leave a review!</h3>
              <p>
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
