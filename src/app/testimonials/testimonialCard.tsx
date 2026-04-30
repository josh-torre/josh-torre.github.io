import { TestimonialType } from "./testimonialData";

const LinkedInLink = ({ href, size }: { href: string; size: number }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="opacity-40 hover:opacity-90 transition-opacity flex-shrink-0"
  >
    <img
      alt="LinkedIn"
      src="/socials-logos/linkedin.svg"
      width={size}
      height={size}
    />
  </a>
);

export const MainTestimonialCard = ({
  testimonial,
}: {
  testimonial: TestimonialType;
}) => {
  const { quote, from, title, authors, linkedinURL } = testimonial;

  return (
    <div className="relative rounded-3xl border border-neutral-700 bg-neutral-800 shadow-xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-neutral-600">
      <div className="flex-1 flex flex-col p-9 md:p-11">
        <div className="text-center mb-5">
          <a
            href={linkedinURL}
            target="_blank"
            rel="noreferrer"
            className="text-white font-semibold hover:text-neutral-300 transition-colors"
          >
            {from}
          </a>
          {title && <p className="text-neutral-500 mt-0.5">{title}</p>}
        </div>

        <div className="flex justify-center gap-6 mb-5">
          {authors.map((author, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <div className="w-24 h-24 rounded-full overflow-hidden ring-1 ring-neutral-600 flex-shrink-0">
                <img
                  src={author.image}
                  alt="Profile photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-1">
                <span className=" font-medium text-center text-neutral-300">
                  {author.name}
                </span>
                <LinkedInLink href={author.linkedinURL} size={13} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1">
          <span className="font-serif text-neutral-600 leading-none select-none text-5xl">
            &ldquo;
          </span>
          <p className="text-gray-300 leading-relaxed -mt-1 text-base md:text-lg">
            {quote}
          </p>
        </div>
      </div>
    </div>
  );
};

export const SecondaryTestimonialCard = ({
  testimonial,
}: {
  testimonial: TestimonialType;
}) => {
  const { quote, title, authors } = testimonial;
  const author = authors[0];

  return (
    <div className="relative rounded-3xl border border-neutral-700 bg-neutral-800 shadow-xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-neutral-600">
      <div className="flex-1 flex flex-col p-7 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-white font-semibold ">{author.name}</span>
              <LinkedInLink href={author.linkedinURL} size={13} />
            </div>
            {title && (
              <p className="text-neutral-500 text-xs mt-0.5">{title}</p>
            )}
          </div>
          <div className="w-20 h-20 rounded-full overflow-hidden ring-1 ring-neutral-600 flex-shrink-0">
            <img
              src={author.image}
              alt="Profile photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1">
          <span className="font-serif text-neutral-600 leading-none select-none text-4xl">
            &ldquo;
          </span>
          <p className="text-gray-300 leading-relaxed -mt-1 text-sm md:text-base line-clamp-6">
            {quote}
          </p>
        </div>
      </div>
    </div>
  );
};
