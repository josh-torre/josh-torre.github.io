import Image from "next/image";
import { aboutMeImages } from "./AboutMeImageData";
import { UseInfiniteCarouselResult } from "./useInfiniteCarousel";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export default function InfiniteCarousel({
  currentIndex,
  getSlideStyle,
  goToNext,
  goToPrevious,
  goToSlide,
}: UseInfiniteCarouselResult) {
  return (
    <div className="flex flex-col w-full items-center justify-center overflow-clip">
      <div className="relative w-full max-w-xl h-64 sm:h-80 md:h-96 flex items-center justify-center">
        <button
          onClick={goToPrevious}
          className="absolute left-0 sm:left-2 z-20 p-2 sm:p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all duration-200"
          aria-label="Previous image"
        >
          <IconChevronLeft size={20} color="#fff" />
        </button>

        <div className="relative w-full h-full flex items-center justify-center">
          {aboutMeImages.map((image, index) => (
            <div
              key={image.id}
              className="absolute w-40 h-52 sm:w-56 sm:h-[17rem] md:w-72 md:h-80 rounded-2xl overflow-hidden shadow-2xl bg-white"
              style={getSlideStyle(index)}
            >
              <Image
                src={image.url}
                alt={image.title}
                width={image.width}
                height={image.height}
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <h3 className="text-white text-sm sm:text-base md:text-lg font-semibold drop-shadow-lg line-clamp-2">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={goToNext}
          className="absolute right-0 sm:right-2 z-20 p-2 sm:p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all duration-200"
          aria-label="Next image"
        >
          <IconChevronRight size={20} color="#fff" />
        </button>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <div className="flex gap-2">
          {aboutMeImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                ? "bg-pastel-blue w-8"
                : "bg-white/30 w-2 hover:bg-white/50 hover:w-4"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}