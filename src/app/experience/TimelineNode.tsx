interface TimelineNodeProps {
  isMobile?: boolean;
}

export const TimelineNode = ({
  isMobile = false,
}: TimelineNodeProps) => {
  const baseClasses = `absolute transform -translate-x-1/2 w-6 h-6 rounded-full border-4 transition-all duration-500`;
  const positionClasses = isMobile
    ? "left-8 md:hidden"
    : "left-1/2 hidden md:block";

  return (
    <div
      className={`${baseClasses} bg-neutral-400 border-neutral-600 scale-100 ${positionClasses}`}
      style={{ top: "2rem" }}
    />
  );
};
