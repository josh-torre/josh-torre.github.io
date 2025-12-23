import { useState, useEffect, useRef } from "react";
import { experiences } from "./types";
import { TimelineItem } from "./TimelineItem";

export const WorkHistoryTimeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) =>
                prev.includes(index)
                  ? prev
                  : [...prev, index].sort((a, b) => a - b)
              );
            }
          });
        },
        { threshold: 0.3, rootMargin: "-50px" }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="experience" className="px-4 relative min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20 text-white">
          Work History
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-neutral-700 h-full hidden md:block" />
          <div className="absolute left-8 w-0.5 bg-neutral-700 h-full md:hidden" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={exp.company}
                ref={(el) => {
                  if (el) itemRefs.current[index] = el;
                }}
                experience={exp}
                index={index}
                isVisible={visibleItems.includes(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
