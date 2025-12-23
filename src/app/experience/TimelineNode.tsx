interface TimelineNodeProps {
  isVisible: boolean;
  isMobile?: boolean;
}

export const TimelineNode = ({
  isVisible,
  isMobile = false,
}: TimelineNodeProps) => {
  const baseClasses = `absolute transform -translate-x-1/2 w-6 h-6 rounded-full border-4 transition-all duration-500`;
  const visibilityClasses = isVisible
    ? "bg-neutral-400 border-neutral-600 scale-100"
    : "bg-neutral-800 border-neutral-700 scale-0";
  const positionClasses = isMobile
    ? "left-8 md:hidden"
    : "left-1/2 hidden md:block";

  return (
    <div
      className={`${baseClasses} ${visibilityClasses} ${positionClasses}`}
      style={{ top: "2rem" }}
    />
  );
};
