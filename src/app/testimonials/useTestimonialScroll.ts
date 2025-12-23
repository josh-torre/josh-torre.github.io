import { useState, useEffect, useRef } from "react";

interface UseScrollTestimonialsProps {
  totalTestimonials: number;
}

interface UseScrollTestimonialsResult {
  currentTestimonialIdx: number;
  progress: number;
  testimonialRef: React.RefObject<HTMLElement | null>;
}

export const useScrollTestimonials = ({
  totalTestimonials,
}: UseScrollTestimonialsProps): UseScrollTestimonialsResult => {
  const [currentTestimonialIdx, setCurrentTestimonialIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const testimonialRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!testimonialRef.current) return;

      const section = testimonialRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;

      if (sectionTop <= viewportHeight && sectionTop + sectionHeight >= 0) {
        //calculate section center position
        const sectionCenter = sectionTop + sectionHeight / 2;
        const viewportCenter = viewportHeight / 2;

        //scroll offsets for smoother transitions
        const startOffset = viewportHeight * 0.5;
        const endOffset = viewportHeight * 0.5;

        // calculate effective scroll range and current position
        const effectiveScrollRange = sectionHeight - startOffset - endOffset;
        const currentScroll =
          viewportCenter - sectionCenter + sectionHeight / 2 - startOffset;

        //calculate and cap scroll progress
        const scrollProgress = currentScroll / effectiveScrollRange;
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

        //current testimonial index based on scroll progress
        const segmentSize = 1 / totalTestimonials;
        const currentIndex = Math.min(
          Math.floor(clampedProgress / segmentSize),
          totalTestimonials - 1
        );
        const segmentProgress = (clampedProgress % segmentSize) / segmentSize;

        setCurrentTestimonialIdx(currentIndex);
        setProgress(segmentProgress * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalTestimonials]);

  return {
    currentTestimonialIdx,
    progress,
    testimonialRef,
  };
};
