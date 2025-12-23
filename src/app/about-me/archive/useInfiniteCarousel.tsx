import { useState, useCallback, CSSProperties } from "react";
import { ImageItem } from "./types";

interface UseInfiniteCarouselOptions {
  images: ImageItem[];
  initialIndex?: number;
  transitionDuration?: number;
  visibleCount?: number;
  overhang?: number;
}

export interface UseInfiniteCarouselResult {
  currentIndex: number;
  isTransitioning: boolean;
  visibleCount: number;
  overhang: number;
  getSlideStyle: (index: number) => CSSProperties;
  goToSlide: (index: number) => void;
  goToPrevious: () => void;
  goToNext: () => void;
}

export function useInfiniteCarousel({
  images,
  initialIndex = 0,
  transitionDuration = 500,
  visibleCount = 5,
  overhang = 60,
}: UseInfiniteCarouselOptions): UseInfiniteCarouselResult {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const total = images.length;
  const sideCount = Math.floor(visibleCount / 2);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), transitionDuration);
    },
    [isTransitioning, currentIndex, transitionDuration]
  );

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), transitionDuration);
  }, [isTransitioning, total, transitionDuration]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), transitionDuration);
  }, [isTransitioning, total, transitionDuration]);

  const getSlideStyle = useCallback(
    (index: number): CSSProperties => {
      let offset = index - currentIndex;

      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      const absOffset = Math.abs(offset);
      const isActive = offset === 0;
      const isVisible = absOffset <= sideCount;

      const translateX = offset * overhang;

      const scaleStep = 0.15 / sideCount;
      const scale = isActive ? 1 : Math.max(0.7, 1 - absOffset * scaleStep);

      const zIndex = isActive ? 10 : Math.max(1, 10 - absOffset);

      const opacityStep = 0.3 / sideCount;
      const opacity = isVisible
        ? isActive
          ? 1
          : Math.max(0.4, 1 - absOffset * opacityStep)
        : 0;

      return {
        transform: `translateX(${translateX}px) scale(${scale})`,
        zIndex,
        opacity,
        transition: `all ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        pointerEvents: isActive ? "auto" : "none",
      };
    },
    [currentIndex, total, transitionDuration, sideCount, overhang]
  );

  return {
    currentIndex,
    isTransitioning,
    visibleCount,
    overhang,
    getSlideStyle,
    goToSlide,
    goToPrevious,
    goToNext,
  };
}
