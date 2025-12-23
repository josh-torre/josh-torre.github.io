import { testimonials } from "./testimonialData";
import { useScrollTestimonials } from "./useTestimonialScroll";
import { TestimonialCard } from "./testimonalCard";

const TestimonialSection = () => {
  const { currentTestimonialIdx, progress, testimonialRef } =
    useScrollTestimonials({
      totalTestimonials: testimonials.length,
    });

  return (
    <section
      id="testimonials"
      ref={testimonialRef}
      className="h-[500vh] relative"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center px-4 overflow-x-hidden">
        <div className="relative w-full max-w-4xl h-96">
          {testimonials.map((testimonial, index) => {
            return (
              <TestimonialCard
                currentTestimonialIdx={currentTestimonialIdx}
                index={index}
                numTestimonals={testimonials.length}
                progress={progress}
                testimonial={testimonial}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
