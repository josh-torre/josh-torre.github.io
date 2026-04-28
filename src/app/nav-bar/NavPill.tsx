import { useAnimatedBorder } from "../hooks/useAnimatedBorder";

interface NavPillProps {
  label: string;
  href: string;
  isActive: boolean;
  isScrolled: boolean;
  onClick: () => void;
}

export const NavPill = ({
  label,
  href,
  isActive,
  isScrolled,
  onClick,
}: NavPillProps) => {
  const { progress, isVisible, resetAndStart } = useAnimatedBorder(isActive);

  const handleClick = () => {
    resetAndStart();
    onClick();
  };

  const pillStyles = isScrolled
    ? "bg-neutral-900/70 backdrop-blur-sm px-4 py-2 rounded-full"
    : "px-4 py-2 rounded-full bg-transparent";

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`relative text-base md:text-lg hover:opacity-80 transition-all duration-300 ${pillStyles}`}
    >
      {label}
      {isVisible && (
        <div
          className="absolute inset-0 rounded-full border border-white pointer-events-none"
          style={{
            maskImage: `conic-gradient(from -90deg at 50% 50%, black ${progress}deg, transparent ${progress}deg)`,
            WebkitMaskImage: `conic-gradient(from -90deg at 50% 50%, black ${progress}deg, transparent ${progress}deg)`,
          }}
        />
      )}
    </a>
  );
};
