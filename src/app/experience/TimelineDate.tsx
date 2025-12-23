interface TimelineDateLabelProps {
  startDate: string;
  endDate?: string;
  isVisible: boolean;
}

export const TimelineDateLabel = ({
  startDate,
  endDate,
  isVisible,
}: TimelineDateLabelProps) => {
  const dateText = `${startDate} - ${endDate || "Present"}`;

  return (
    <div
      className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-10 text-sm text-gray-300 whitespace-nowrap transition-opacity duration-500 hidden md:block px-3 py-1 rounded-full  backdrop-blur-md border border-neutral-700/50 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
    >
      {dateText}
    </div>
  );
};
