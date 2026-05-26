"use client";

import Image from "next/image";
import { TestimonialType } from "./testimonialData";
import { IlluminatedQuote } from "./IlluminatedQuote";

const LinkedInMark = ({ size = 12 }: { size?: number }) => (
  <Image
    alt=""
    aria-hidden="true"
    src="/socials-logos/linkedin.svg"
    width={size}
    height={size}
    className="opacity-50 group-hover:opacity-80 transition-opacity"
  />
);

const AttributionBlock = ({
  testimonial,
}: {
  testimonial: TestimonialType;
}) => {
  const { authors, from, linkedinURL } = testimonial;
  const singleAuthor = authors.length === 1;
  const orgRedundant =
    singleAuthor &&
    typeof authors[0].name === "string" &&
    authors[0].name === from;

  return (
    <div className="mt-8 sm:mt-12 md:mt-14 flex flex-col items-center gap-4 sm:gap-5">
      <div className="flex flex-wrap items-start justify-center gap-x-5 sm:gap-x-8 gap-y-4">
        {authors.map((a, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <Image
              src={a.image}
              alt=""
              width={96}
              height={96}
              className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover"
            />
            <a
              href={a.linkedinURL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-1.5 text-white/85 hover:text-white text-sm font-medium transition-colors"
            >
              <span>{a.name}</span>
              <LinkedInMark />
            </a>
            {a.title && (
              <span className="text-[11px] tracking-[0.18em] uppercase font-medium text-white/40 text-center">
                {a.title}
              </span>
            )}
          </div>
        ))}
      </div>

      {!orgRedundant && (
        <div className="flex items-center gap-2 mt-1">
          <a
            href={linkedinURL}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] tracking-[0.18em] uppercase font-medium text-white/40 hover:text-white/70 transition-colors"
          >
            {from}
          </a>
        </div>
      )}
    </div>
  );
};

export const TestimonialContent = ({
  testimonial,
  progress,
}: {
  testimonial: TestimonialType;
  progress: number;
}) => {
  return (
    <div className="max-w-3xl w-full text-center">
      <IlluminatedQuote segments={testimonial.segments} progress={progress} />
      <AttributionBlock testimonial={testimonial} />
    </div>
  );
};
