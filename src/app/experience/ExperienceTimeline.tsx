import { experiences } from "./experienceTypes";
import { TimelineItem } from "./TimelineItem";

export const WorkHistoryTimeline = () => {
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
              <TimelineItem key={exp.company} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
