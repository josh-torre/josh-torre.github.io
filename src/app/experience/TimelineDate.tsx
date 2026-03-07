interface TimelineDateLabelProps {
  startDate: string;
  endDate?: string;
}

export const TimelineDateLabel = ({
  startDate,
  endDate,
}: TimelineDateLabelProps) => {
  const dateText = `${startDate} - ${endDate || "Present"}`;

  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 -translate-y-10 text-sm text-gray-300 whitespace-nowrap hidden md:block px-3 py-1 rounded-full  backdrop-blur-md border border-neutral-700/50"
    >
      {dateText}
    </div>
  );
};
