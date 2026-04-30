import { testimonials } from "./testimonialData";
import { MainTestimonialCard, SecondaryTestimonialCard } from "./testimonialCard";
import { SectionHeader } from "../core-components/SectionHeader";

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader label="Testimonials" title="Don't just take my word for it" />

        <div className="grid md:grid-cols-2 gap-6 md:grid-rows-2">
          <div className="md:row-span-2">
            <MainTestimonialCard testimonial={testimonials[0]} />
          </div>
          <SecondaryTestimonialCard testimonial={testimonials[1]} />
          <SecondaryTestimonialCard testimonial={testimonials[2]} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
