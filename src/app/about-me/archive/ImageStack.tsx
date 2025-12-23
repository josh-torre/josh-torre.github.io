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
    <div className="flex flex-col w-[566px] h-100 items-center justify-center p-8 overflow-clip">
      <div className="relative w-full max-w-4xl h-96 flex items-center justify-center">
        <button
          onClick={goToPrevious}
          className="absolute left-4 z-20 p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all duration-200"
          aria-label="Previous image"
        >
          <IconChevronLeft size={24} color="#fff" />
        </button>

        <div className="relative w-full h-full flex items-center justify-center">
          {aboutMeImages.map((image, index) => (
            <div
              key={image.id}
              className="absolute w-72 h-80 rounded-2xl overflow-hidden shadow-2xl bg-white"
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
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-lg font-semibold drop-shadow-lg">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={goToNext}
          className="absolute right-4 z-20 p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all duration-200"
          aria-label="Next image"
        >
          <IconChevronRight size={24} color="#fff" />
        </button>
      </div>

      <div className="flex items-center gap-4 ">
        <div className="flex gap-2">
          {aboutMeImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
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
