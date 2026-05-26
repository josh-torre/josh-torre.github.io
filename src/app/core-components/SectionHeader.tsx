type SectionHeaderProps = {
  label: string;
  title: string;
  className?: string;
};

export const SectionHeader = ({
  label,
  title,
  className = "mb-12",
}: SectionHeaderProps) => (
  <div className={`text-center ${className}`}>
    <p className="text-xs font-medium tracking-[0.18em] text-white/40 uppercase mb-3">
      {label}
    </p>
    <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.01em] text-white">
      {title}
    </h2>
  </div>
);
