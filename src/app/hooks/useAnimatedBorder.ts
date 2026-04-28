import { useCallback, useEffect, useRef, useState } from "react";

export function useAnimatedBorder(isActive: boolean) {
  const [progress, setProgress] = useState(0);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const animRef = useRef<number | null>(null);
  const progressRef = useRef(0);
  const wasActive = useRef(false);

  const startAnimation = useCallback((direction: "in" | "out") => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    const duration = 400;
    const startTime = performance.now();
    const startProg = progressRef.current;
    if (direction === "out") setIsAnimatingOut(true);
    else setIsAnimatingOut(false);

    const animate = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      const next = direction === "in" ? t * 360 : startProg * (1 - t);
      progressRef.current = next;
      setProgress(next);
      if (t < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else if (direction === "out") {
        setIsAnimatingOut(false);
      }
    };
    animRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    if (isActive && !wasActive.current) {
      startAnimation("in");
    } else if (!isActive && wasActive.current) {
      startAnimation("out");
    }
    /* eslint-enable react-hooks/set-state-in-effect */
    wasActive.current = isActive;
  }, [isActive, startAnimation]);

  const resetAndStart = useCallback(() => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    progressRef.current = 0;
    setProgress(0);
    setIsAnimatingOut(false);
    requestAnimationFrame(() => startAnimation("in"));
  }, [startAnimation]);

  return {
    progress,
    isAnimatingOut,
    isVisible: isActive || isAnimatingOut || progress > 0,
    resetAndStart,
  };
}
