import { ReactNode } from "react";
import { GrainOverlay } from "../core-components/GrainOverlay";

interface CalloutProps {
  icon: ReactNode;
  title: string;
  text: string;
  isLeft: boolean;
  isVisible: boolean;
  bgColor: string;
  fontColor: string;
}

export const Callout = ({
  icon,
  title,
  text,
  isLeft,
  isVisible,
  bgColor,
  fontColor,
}: CalloutProps) => {
  return (
    <div
      className={`hidden md:block absolute top-20 transition-all duration-700 ${
        isLeft
          ? "left-[calc(50%+3rem)] pl-12 flex justify-start"
          : "right-[calc(50%+3rem)] pr-12 flex justify-end"
      }`}
      style={{
        width: "calc(50% - 5rem)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: isVisible ? "500ms" : "0ms",
      }}
    >
      <div
        className={`relative rounded-[24px] p-5 shadow-[#1A1A1A] shadow-lg overflow-hidden ${bgColor}`}
      >
        <GrainOverlay />
        <div className="relative z-10">
          <div
            className={`flex flex-row items-center gap-2 ${fontColor} font-semibold mb-2 ${
              isLeft ? "justify-start" : "justify-end"
            }`}
          >
            {isLeft ? (
              <>
                <span className="w-5 h-5">{icon}</span>
                <p className="text-lg">{title}</p>
              </>
            ) : (
              <>
                <p className="text-lg">{title}</p>
                <span className="w-5 h-5">{icon}</span>
              </>
            )}
          </div>
          <p className={`text-gray-200 ${isLeft ? "text-left" : "text-right"}`}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Callout;
