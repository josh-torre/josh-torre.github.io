import { RefObject, useEffect, useState } from "react";

// Progress (0-1) of `ref` scrolling through the viewport.
export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      rafId = 0;
      const el = ref.current;
      if (!el) return;

      const { top, height } = el.getBoundingClientRect();
      const scrollable = height - window.innerHeight;

      if (scrollable <= 0) {
        setProgress(top < 0 ? 1 : 0);
        return;
      }

      const ratio = -top / scrollable;
      setProgress(Math.max(0, Math.min(1, ratio)));
    };

    const schedule = () => {
      if (!rafId) rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    // iOS Safari collapses its address bar without firing window.resize.
    window.visualViewport?.addEventListener("resize", schedule);
    window.visualViewport?.addEventListener("scroll", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.visualViewport?.removeEventListener("resize", schedule);
      window.visualViewport?.removeEventListener("scroll", schedule);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [ref]);

  return progress;
}
