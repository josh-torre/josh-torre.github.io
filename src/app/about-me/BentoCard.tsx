import { useState } from "react";
import { useAnimatedBorder } from "../hooks/useAnimatedBorder";

export interface BentoCardProps {
    section: {
        id: string;
        label: string;
        description: string;
        icon: React.ReactElement;
        span: string;
    };
    hasVisited: boolean;
    onSelect: () => void;
}

export default function BentoCard({
    section,
    hasVisited,
    onSelect,
}: BentoCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const { progress, isVisible } = useAnimatedBorder(isHovered);

    return (
        <button
            onClick={onSelect}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
          ${section.span}
          group relative flex flex-col items-center justify-center gap-3 p-8 md:p-12
          rounded-3xl transition-all duration-200
          bg-neutral-800 border border-neutral-700 shadow-2xl
          hover:-translate-y-1
          text-center
        `}
        >
            {/* Animated border overlay */}
            {isVisible && (
                <div
                    className="absolute inset-0 rounded-3xl border border-white pointer-events-none"
                    style={{
                        maskImage: `conic-gradient(from -90deg at 50% 50%, black ${progress}deg, transparent ${progress}deg)`,
                        WebkitMaskImage: `conic-gradient(from -90deg at 50% 50%, black ${progress}deg, transparent ${progress}deg)`,
                    }}
                />
            )}

            {!hasVisited && (
                <span className="absolute top-4 right-4 size-2 rounded-full bg-blue-500 animate-pulse" />
            )}
            <span className="text-gray-400 group-hover:text-gray-200 transition-colors">
                {section.icon}
            </span>
            <span className="text-lg md:text-xl font-semibold text-gray-200">
                {section.label}
            </span>
            <span className="text-base md:text-lg text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                {section.description}
            </span>
        </button>
    );
}
