import { aboutMeImages } from "./AboutMeImageData";
import ImageStack from "./ImageStack";
import { useInfiniteCarousel } from "./useInfiniteCarousel";

export const ArchiveContent = () => {
  const infiniteCarouselProps = useInfiniteCarousel({
    images: aboutMeImages,
    visibleCount: 3,
    overhang: 120,
    transitionDuration: 300,
  });

  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8">
      <div className="flex-shrink-0 w-full lg:w-auto lg:min-w-[500px] flex items-center justify-center">
        <ImageStack
          currentIndex={infiniteCarouselProps.currentIndex}
          isTransitioning={infiniteCarouselProps.isTransitioning}
          visibleCount={infiniteCarouselProps.visibleCount}
          overhang={infiniteCarouselProps.overhang}
          getSlideStyle={infiniteCarouselProps.getSlideStyle}
          goToSlide={infiniteCarouselProps.goToSlide}
          goToPrevious={infiniteCarouselProps.goToPrevious}
          goToNext={infiniteCarouselProps.goToNext}
        />
      </div>

      <div className="flex flex-col min-w-0 text-center lg:text-left px-4 lg:px-0">
        <p className="text-white text-2xl md:text-3xl pb-3 break-words">
          {aboutMeImages[infiniteCarouselProps.currentIndex].title}
        </p>
        <div className="text-gray-400 text-base md:text-lg leading-relaxed break-words">
          {aboutMeImages[infiniteCarouselProps.currentIndex].description}
        </div>
      </div>
    </div>
  );
};