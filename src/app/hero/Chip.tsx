import { useEffect, useRef, useState } from "react";
import { GrainOverlay } from "../core-components/GrainOverlay";
import "./hero-animations.css";

interface ChipProps {
  label: string;
  className: string;
  top?: string;
  left?: string;
  animation?: string;
  textSize?: string;
  delay?: string;
  startingOpacity?: number;
  startingZIdx?: number;
}

export const Chip = ({
  label,
  className: color,
  top,
  left,
  animation,
  delay,
  textSize = "text-lg sm:text-2xl md:text-3xl",
  startingOpacity = 0,
  startingZIdx = 0,
}: ChipProps) => {
  const innerRef = useRef<HTMLDivElement>(null);
  const isAnimated = !!animation;

  const [isInFront, setIsInFront] = useState(false);
  useEffect(() => {
    if (!isAnimated) return;
    const delayMs = parseFloat(delay ?? "0") * 1000;
    const id = setTimeout(() => setIsInFront(true), delayMs + 800);
    return () => clearTimeout(id);
  }, [isAnimated, delay]);

  return (
    <div
      style={{
        top,
        left,
        position: top || left ? "absolute" : "relative",
        animation: isAnimated
          ? `${animation} 2s cubic-bezier(0.4, 0, 0.2, 1) ${delay ?? "0s"} both`
          : undefined,

        zIndex: isAnimated ? (isInFront ? 40 : 20) : startingZIdx,
        opacity: isAnimated ? undefined : startingOpacity,
        willChange: isAnimated ? "transform, opacity" : undefined,
      }}
    >
      <div
        ref={innerRef}
        className={`relative w-fit h-10 sm:h-12 md:h-16 rounded-[32px] flex justify-center items-center shadow-[#1A1A1A] shadow-lg overflow-hidden select-none ${color}`}
      >
        <GrainOverlay />
        <p
          className={`px-4 sm:px-5 md:px-6 text-center text-white ${textSize} whitespace-nowrap relative z-10`}
        >
          {label}
        </p>
      </div>
    </div>
  );
};
