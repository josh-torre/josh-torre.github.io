"use client";

import { useRef } from "react";
import { testimonials } from "./testimonialData";
import { TestimonialContent } from "./TestimonialScene";
import { SectionHeader } from "../core-components/SectionHeader";
import { useScrollProgress } from "../hooks/useScrollProgress";

// Total scrollable height of the section is set on the <section> element
// via Tailwind responsive classes. Mobile uses a shorter section so the
// scroll budget feels reasonable on touch devices.

// Width (in normalized [0,1] progress) of cross-fade between adjacent frames.
// Smaller = tighter transitions ("less time between frames").
const CROSSFADE = 0.04;

// Re-map local frame progress so words spread out across most of a frame
// (more scroll per word) with only a brief hold before the cross-fade.
const REVEAL_END = 0.7;

const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);

type ScrollFrame = { kind: "header" } | { kind: "testimonial"; index: number };

const buildFrames = (): ScrollFrame[] => [
  { kind: "header" },
  ...testimonials.map((_, index) => ({ kind: "testimonial" as const, index })),
];

const TestimonialSection = () => {
  const ref = useRef<HTMLElement>(null);
  const progress = useScrollProgress(ref);

  const frames = buildFrames();
  const total = frames.length;
  const slot = 1 / total;

  const skipSection = () => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const sectionEndInDoc = rect.top + window.scrollY + el.offsetHeight;
    window.scrollTo({ top: sectionEndInDoc, behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="testimonials"
      className="relative h-[500vh] md:h-[700vh]"
    >
      <div className="sticky top-0 h-dvh overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
          {frames.map((frame, i) => {
            const start = i * slot;
            const end = (i + 1) * slot;
            const isFirst = i === 0;
            const isLast = i === total - 1;

            const fadeIn = isFirst
              ? 1
              : clamp01((progress - (start - CROSSFADE / 2)) / CROSSFADE);
            const fadeOut = isLast
              ? 1
              : clamp01((end + CROSSFADE / 2 - progress) / CROSSFADE);
            const opacity = Math.min(fadeIn, fadeOut);

            if (opacity <= 0.005) return null;

            const local = clamp01((progress - start) / (end - start));
            // Stretch the early portion of local progress into the reveal
            // window; the later portion compresses into a long hold.
            const revealProgress = clamp01(local / REVEAL_END);

            return (
              <div
                key={i}
                className="absolute inset-0 flex items-center justify-center px-4 sm:px-6"
                style={{ opacity }}
                aria-hidden={opacity < 0.5}
              >
                {frame.kind === "header" ? (
                  <SectionHeader
                    label="Testimonials"
                    title="Don't just take my word for it"
                    className="mb-0"
                  />
                ) : (
                  <TestimonialContent
                    testimonial={testimonials[frame.index]}
                    progress={revealProgress}
                  />
                )}
              </div>
            );
          })}
        </div>

        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
          style={{
            opacity: progress > 0 && progress < 1 ? 1 : 0,
            transition: "opacity 200ms ease-out",
            pointerEvents: progress > 0 && progress < 1 ? "auto" : "none",
          }}
        >
          <div aria-hidden="true" className="relative w-48 sm:w-60">
            <div className="h-0.5 rounded-full bg-white/8 overflow-hidden">
              <div
                className="h-full rounded-full bg-white/55 origin-left"
                style={{ transform: `scaleX(${progress})` }}
              />
            </div>
            {testimonials.map((_, i) => {
              // Marker for the start of each testimonial frame. Frames are
              // [header, t0, t1, t2], so each testimonial begins at
              // (i + 1) / total of section progress.
              const position = (i + 1) / (testimonials.length + 1);
              const reached = progress >= position - 0.001;
              return (
                <div
                  key={i}
                  className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full transition-[background-color] duration-200"
                  style={{
                    left: `${position * 100}%`,
                    backgroundColor: reached
                      ? "rgba(255, 255, 255, 0.9)"
                      : "rgba(255, 255, 255, 0.3)",
                  }}
                />
              );
            })}
          </div>
          <button
            type="button"
            onClick={skipSection}
            className="group flex items-center gap-1.5 text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-medium text-white/30 hover:text-white/70 transition-colors"
          >
            Skip
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="translate-y-px group-hover:translate-y-0.5 transition-transform"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
