import { TestimonialType } from "./testimonialData";

interface TestimonialCardProps {
  testimonial: TestimonialType;
  currentTestimonialIdx: number;
  progress: number;
  index: number;
  numTestimonals: number;
}

export const TestimonialCard = ({
  currentTestimonialIdx,
  index,
  numTestimonals,
  progress,
  testimonial,
}: TestimonialCardProps) => {
  const isActive = currentTestimonialIdx === index;
  const translateX = isActive ? 0 : currentTestimonialIdx > index ? -100 : 100;

  return (
    <div
      key={index}
      className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out"
      style={{
        opacity: isActive ? 1 : 0,
        transform: `translateX(${translateX}%)`,
      }}
    >
      <div className="bg-neutral-800 rounded-3xl p-8 md:p-12 border border-neutral-700 shadow-2xl w-full relative">
        <div className="absolute top-6 right-8 md:right-12 w-24 md:w-32 h-2 bg-neutral-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-neutral-400 to-neutral-200"
            style={{ width: `${isActive ? progress : 0}%` }}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mt-8 md:mt-0">
          <div className="flex-shrink-0 w-32 h-32 bg-neutral-700 rounded-xl overflow-hidden">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-6 italic">
              "{testimonial.quote}"
            </p>
            <div className="border-t border-neutral-600 pt-4">
              <div className="flex flex-row gap-4 items-center align-center">
                <p className="text-lg md:text-xl font-semibold">
                  {testimonial.name}
                </p>
                <a href={testimonial.linkedinURL} target="_blank">
                  <img
                    alt="Linkedin Logo"
                    src={"/socials-logos/linkedin.svg"}
                    width={20}
                    height={20}
                  />
                </a>
              </div>
              <p className="text-base md:text-lg text-gray-400 mt-1">
                {testimonial.title}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-8 md:right-12 text-sm text-gray-500">
          {index + 1} / {numTestimonals}
        </div>
      </div>
    </div>
  );
};
