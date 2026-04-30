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
    <p className="text-sm font-extrabold tracking-widest text-neutral-500 uppercase mb-3">
      {label}
    </p>
    <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
  </div>
);
