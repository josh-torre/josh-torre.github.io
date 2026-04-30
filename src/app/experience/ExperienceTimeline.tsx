import { experiences } from "./experienceTypes";
import { TimelineItem } from "./TimelineItem";
import { SectionHeader } from "../core-components/SectionHeader";

export const WorkHistoryTimeline = () => {
  return (
    <section id="experience" className="px-4 relative min-h-screen">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Experience" title="Where I've left my mark" className="mb-20" />

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
