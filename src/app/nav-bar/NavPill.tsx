import { useEffect, useRef, useState } from "react";

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
  const [progress, setProgress] = useState(0);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const animationRef = useRef<number | null>(null);
  const wasActive = useRef(false);

  useEffect(() => {
    if (isActive && !wasActive.current) {
      setIsAnimatingOut(false);
      startAnimation("in");
    } else if (!isActive && wasActive.current) {
      startAnimation("out");
    }
    wasActive.current = isActive;
  }, [isActive]);

  const startAnimation = (direction: "in" | "out") => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const duration = 400;
    const startTime = performance.now();
    const startProgress = progress;

    if (direction === "out") {
      setIsAnimatingOut(true);
    }

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const t = Math.min(elapsed / duration, 1);

      if (direction === "in") {
        setProgress(t * 360);
      } else {
        setProgress(startProgress * (1 - t));
      }

      if (elapsed < duration) {
        animationRef.current = requestAnimationFrame(animate);
      } else if (direction === "out") {
        setIsAnimatingOut(false);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const handleClick = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setProgress(0);
    setIsAnimatingOut(false);
    requestAnimationFrame(() => {
      startAnimation("in");
    });
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
      {(isActive || isAnimatingOut || progress > 0) && (
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
