export interface TestimonialAuthor {
  image: string;
  name: React.ReactNode;
  linkedinURL: string;
}

export interface TestimonialType {
  quote: React.ReactNode;
  from: React.ReactNode;
  title: string;
  authors: TestimonialAuthor[];
  linkedinURL: string;
}

export const testimonials: TestimonialType[] = [
  {
    quote: (
      <>
        Josh is a{" "}
        <strong className="text-white font-semibold">
          high velocity, high impact contributor
        </strong>{" "}
        — technically strong across the stack, collaborative with non-technical
        teammates and unusually mature for where he is in his career. He{" "}
        <strong className="text-white font-semibold">takes ownership</strong>,{" "}
        <strong className="text-white font-semibold">
          communicates proactively
        </strong>
        , and{" "}
        <strong className="text-white font-semibold">follows through</strong>.
        We&apos;d be thrilled to work with him again.
      </>
    ),
    from: <>Kubera Health Leadership</>,
    title: "Leadership Team",
    authors: [
      {
        image: "testimonials/kubera/matt.jpg",
        name: <>Matt Lefkowitz</>,
        linkedinURL: "https://www.linkedin.com/in/matt-lefkowitz-91bb18144/",
      },
      {
        image: "testimonials/kubera/roja.jpg",
        name: (
          <>
            Roja Garimella,
            <br /> MD, MBA
          </>
        ),
        linkedinURL: "https://www.linkedin.com/in/rojagarimella/",
      },
      {
        image: "testimonials/kubera/chase.jpg",
        name: <>Chase Robbins</>,
        linkedinURL: "https://www.linkedin.com/in/chaserobbins1/",
      },
    ],
    linkedinURL: "https://www.linkedin.com/company/kubera-health/",
  },
  {
    quote: (
      <>
        He possesses a{" "}
        <strong className="text-white font-semibold">
          rare ability to communicate intricate ideas with simplicity and
          precision
        </strong>
        , ensuring everyone is on the same page. This talent ensures{" "}
        <strong className="text-white font-semibold">
          alignment across various stakeholders
        </strong>
        , from peers to top-tier executives.
      </>
    ),
    from: <>Kevin Gibbs</>,
    title: "Business Process Analyst",
    authors: [
      {
        image: "testimonials/kevin-gibbs.jpeg",
        name: <>Kevin Gibbs</>,
        linkedinURL: "https://www.linkedin.com/in/kevin-gibbs-07b18815b/",
      },
    ],
    linkedinURL: "https://www.linkedin.com/in/kevin-gibbs-07b18815b/",
  },
  {
    quote: (
      <>
        Josh has proven he can{" "}
        <strong className="text-white font-semibold">
          move seamlessly between roles
        </strong>{" "}
        that are traditionally split between a{" "}
        <strong className="text-white font-semibold">
          business analyst, systems analyst, and software developer
        </strong>{" "}
        on the team. I cannot emphasize enough Josh&apos;s{" "}
        <strong className="text-white font-semibold">
          multi-faceted and versatile skill set
        </strong>
        .
      </>
    ),
    from: <>Josh Learned</>,
    title: "Enrollment Systems Manager",
    authors: [
      {
        image: "testimonials/josh-learned.jpeg",
        name: <>Josh Learned</>,
        linkedinURL: "https://www.linkedin.com/in/joshua-r-learned/",
      },
    ],
    linkedinURL: "https://www.linkedin.com/in/joshua-r-learned/",
  },
];
