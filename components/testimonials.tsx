"use client";
import Image from "next/image";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    rating: 5,
    quote:
      "We came to Cuebec for visuals. We left with a brand system that actually works in the real world.",
    author: "Maya R., Co-founder, Consumer Brand",
  },
  {
    rating: 5,
    quote:
      "Cuebec transformed our digital presence with thoughtful strategy and stunning design.",
    author: "David L., CEO, Tech Startup",
  },
  {
    rating: 5,
    quote:
      "The team's creative direction elevated our brand beyond what we imagined possible.",
    author: "Sarah K., Marketing Director",
  },
  {
    rating: 5,
    quote:
      "Professional, innovative, and results-driven. Cuebec delivered excellence at every stage.",
    author: "James T., Product Manager",
  },
];

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollInterval = 30;
    let autoScrollTimer: NodeJS.Timeout | null = null;

    const startScrolling = () => {
      autoScrollTimer = setInterval(() => {
        if (scrollContainer) {
          scrollAmount += scrollStep;
          scrollContainer.scrollLeft = scrollAmount;

          // Reset scroll when reaching the end
          if (scrollAmount >= scrollContainer.scrollWidth / 2) {
            scrollAmount = 0;
            scrollContainer.scrollLeft = 0;
          }
        }
      }, scrollInterval);
    };

    const stopScrolling = () => {
      if (autoScrollTimer) {
        clearInterval(autoScrollTimer);
        autoScrollTimer = null;
      }
    };

    // Start auto-scroll on mount
    startScrolling();

    // Pause on hover, resume on leave
    const handleMouseEnter = () => stopScrolling();
    const handleMouseLeave = () => startScrolling();

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      stopScrolling();
      scrollContainer?.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="bg-[#0a0a0a] py-20">
      <div>
        <h2 className="text-4xl md:text-7xl tracking-tighter text-white text-center mb-10">
          What our Clients Say
        </h2>
      </div>
      <div className="overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden"
          style={{ scrollBehavior: "smooth" }}
        >
          {/* Duplicate testimonials for infinite scroll effect */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[100px] max-w-[400px] md:min-w-[100px] md:max-w-[700px] border border-white/30 flex-shrink-0 p-8 md:p-12"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4 md:mb-8 justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 fill-[#D7F20F]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-white text-base text-center mb-4 md:mb-12 leading-relaxed">
                {testimonial.quote}
              </p>

              {/* Author */}
              <p className="text-white text-2xl md:text-3xl text-center">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
