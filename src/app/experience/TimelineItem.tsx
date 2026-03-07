import { forwardRef } from "react";
import { Experience } from "./types";
import { TimelineNode } from "./TimelineNode";
import { TimelineDateLabel } from "./TimelineDate";
import { ExperienceCard } from "./ExperienceCard";
import Callout from "./ExperienceCallout";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export const TimelineItem = ({ experience, index }: TimelineItemProps) => {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative">
      <TimelineNode />
      <TimelineNode isMobile />

      <TimelineDateLabel
        startDate={experience.startDate}
        endDate={experience.endDate}
      />

      {experience.callout && (
        <Callout
          icon={experience.callout.icon}
          title={experience.callout.title}
          text={experience.callout.text}
          isLeft={isLeft}
          bgColor="bg-deep-blue"
          fontColor="text-pastel-blue"
        />
      )}

      <ExperienceCard
        experience={experience}
        isLeft={isLeft}
      />
    </div>
  );
}
