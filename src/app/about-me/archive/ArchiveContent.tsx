import { aboutMeImages } from "./AboutMeImageData";
import ImageStack from "./ImageStack";
import { useInfiniteCarousel } from "./useInfiniteCarousel";

export const ArchiveContent = () => {
  const infinateCarouselProps = useInfiniteCarousel({
    images: aboutMeImages,
    visibleCount: 3,
    overhang: 120,
    transitionDuration: 300,
  });

  return (
    <div className="w-full h-max flex flex-col md:flex-row items-center justify-center gap-4">
      <div className="flex-shrink-0">
        <ImageStack
          currentIndex={infinateCarouselProps.currentIndex}
          isTransitioning={infinateCarouselProps.isTransitioning}
          visibleCount={infinateCarouselProps.visibleCount}
          overhang={infinateCarouselProps.overhang}
          getSlideStyle={infinateCarouselProps.getSlideStyle}
          goToSlide={infinateCarouselProps.goToSlide}
          goToPrevious={infinateCarouselProps.goToPrevious}
          goToNext={infinateCarouselProps.goToNext}
        />
      </div>
      <div className="flex flex-col min-w-0 max-w-full">
        <p className="text-white text-3xl pb-4 break-words">
          {getImageTitle(infinateCarouselProps.currentIndex)}
        </p>
        <div className="break-words">
          {getImageDesc(infinateCarouselProps.currentIndex)}
        </div>
      </div>
    </div>
  );
};

const getImageTitle = (idx: number) => {
  return aboutMeImages[idx].title;
};

const getImageDesc = (idx: number) => {
  return aboutMeImages[idx].description;
};
