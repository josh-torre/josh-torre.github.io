import { forwardRef } from "react";
import { Experience } from "./types";
import { TimelineNode } from "./TimelineNode";
import { TimelineDateLabel } from "./TimelineDate";
import { ExperienceCard } from "./ExperienceCard";
import Callout from "./ExperienceCallout";

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isVisible: boolean;
}

export const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ experience, index, isVisible }, ref) => {
    const isLeft = index % 2 === 0;

    return (
      <div ref={ref} className="relative">
        <TimelineNode isVisible={isVisible} />
        <TimelineNode isVisible={isVisible} isMobile />

        <TimelineDateLabel
          startDate={experience.startDate}
          endDate={experience.endDate}
          isVisible={isVisible}
        />

        {experience.callout && (
          <Callout
            icon={experience.callout.icon}
            title={experience.callout.title}
            text={experience.callout.text}
            isLeft={isLeft}
            isVisible={isVisible}
            bgColor="bg-deep-blue"
            fontColor="text-pastel-blue"
          />
        )}

        <ExperienceCard
          experience={experience}
          isLeft={isLeft}
          isVisible={isVisible}
        />
      </div>
    );
  }
);
