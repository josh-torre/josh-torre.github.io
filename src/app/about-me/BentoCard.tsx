import { useEffect, useRef, useState } from "react";

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
    const [progress, setProgress] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isAnimatingOut, setIsAnimatingOut] = useState(false);
    const animRef = useRef<number | null>(null);
    const wasHovered = useRef(false);

    useEffect(() => {
        if (isHovered && !wasHovered.current) {
            setIsAnimatingOut(false);
            startAnimation("in");
        } else if (!isHovered && wasHovered.current) {
            startAnimation("out");
        }
        wasHovered.current = isHovered;
    }, [isHovered]);

    const startAnimation = (direction: "in" | "out") => {
        if (animRef.current) cancelAnimationFrame(animRef.current);
        const duration = 400;
        const startTime = performance.now();
        const startProg = progress;
        if (direction === "out") setIsAnimatingOut(true);

        const animate = (now: number) => {
            const t = Math.min((now - startTime) / duration, 1);
            if (direction === "in") {
                setProgress(t * 360);
            } else {
                setProgress(startProg * (1 - t));
            }
            if (t < 1) {
                animRef.current = requestAnimationFrame(animate);
            } else if (direction === "out") {
                setIsAnimatingOut(false);
            }
        };
        animRef.current = requestAnimationFrame(animate);
    };

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
            {(isHovered || isAnimatingOut || progress > 0) && (
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
