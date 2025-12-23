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
  textSize = "text-3xl",
  startingOpacity = 0,
  startingZIdx = 0,
}: ChipProps) => (
  <div
    className={`relative w-fit h-16 rounded-[32px] flex justify-center items-center shadow-[#1A1A1A] shadow-lg overflow-hidden select-none ${color}`}
    style={{
      top,
      left,
      position: top || left ? "absolute" : "relative",
      animation: animation
        ? `${animation} 2s cubic-bezier(0.4, 0, 0.2, 1) ${
            delay || "0s"
          } forwards`
        : undefined,
      opacity: startingOpacity,
      zIndex: startingZIdx,
      // Add will-change for GPU acceleration hints
      willChange: animation ? "transform, opacity" : undefined,
      // Prevent subpixel rendering issues
      backfaceVisibility: "hidden",
    }}
  >
    <GrainOverlay />
    <p
      className={`p-6 text-center text-white ${textSize} whitespace-nowrap relative z-10`}
    >
      {label}
    </p>
  </div>
);
