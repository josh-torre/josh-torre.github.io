export type QuoteSegment =
  | { type: "text"; content: string }
  | { type: "highlight"; content: string };

export interface TestimonialAuthor {
  image: string;
  name: React.ReactNode;
  title: string;
  linkedinURL: string;
}

export interface TestimonialType {
  segments: QuoteSegment[];
  from: string;
  authors: TestimonialAuthor[];
  linkedinURL: string;
}

export const testimonials: TestimonialType[] = [
  {
    segments: [
      { type: "text", content: "Josh is a " },
      { type: "highlight", content: "high velocity, high impact contributor" },
      {
        type: "text",
        content:
          " — technically strong across the stack, collaborative with non-technical teammates and unusually mature for where he is in his career. He ",
      },
      { type: "highlight", content: "takes ownership" },
      { type: "text", content: ", " },
      { type: "highlight", content: "communicates proactively" },
      { type: "text", content: ", and " },
      { type: "highlight", content: "follows through" },
      { type: "text", content: ". We'd be thrilled to work with him again." },
    ],
    from: "Kubera Health Founding Leadership Team",
    authors: [
      {
        image: "/testimonials/kubera/roja.jpg",
        name: "Roja Garimella, MD, MBA",
        title: "Founder & CEO",
        linkedinURL: "https://www.linkedin.com/in/rojagarimella/",
      },
      {
        image: "/testimonials/kubera/chase.jpg",
        name: "Chase Robbins",
        title: "Head of Engineering",
        linkedinURL: "https://www.linkedin.com/in/chaserobbins1/",
      },

      {
        image: "/testimonials/kubera/matt.jpg",
        name: "Matt Lefkowitz",
        title: "Customer Strategy",
        linkedinURL: "https://www.linkedin.com/in/matt-lefkowitz-91bb18144/",
      },
    ],
    linkedinURL: "https://www.linkedin.com/company/kubera-health/",
  },
  {
    segments: [
      { type: "text", content: "He possesses a " },
      {
        type: "highlight",
        content:
          "rare ability to communicate intricate ideas with simplicity and precision",
      },
      {
        type: "text",
        content:
          ", ensuring everyone is on the same page. This talent ensures ",
      },
      { type: "highlight", content: "alignment across various stakeholders" },
      { type: "text", content: ", from peers to top-tier executives." },
    ],
    from: "Kevin Gibbs",
    authors: [
      {
        image: "/testimonials/kevin-gibbs.jpeg",
        name: "Kevin Gibbs",
        title: "Business Process Analyst",
        linkedinURL: "https://www.linkedin.com/in/kevin-gibbs-07b18815b/",
      },
    ],
    linkedinURL: "https://www.linkedin.com/in/kevin-gibbs-07b18815b/",
  },
  {
    segments: [
      { type: "text", content: "Josh has proven he can " },
      { type: "highlight", content: "move seamlessly between roles" },
      { type: "text", content: " that are traditionally split between a " },
      {
        type: "highlight",
        content: "business analyst, systems analyst, and software developer",
      },
      {
        type: "text",
        content: " on the team. I cannot emphasize enough Josh's ",
      },
      { type: "highlight", content: "multi-faceted and versatile skill set" },
      { type: "text", content: "." },
    ],
    from: "Josh Learned",
    authors: [
      {
        image: "/testimonials/josh-learned.jpeg",
        name: "Josh Learned",
        title: "Enrollment Systems Manager",
        linkedinURL: "https://www.linkedin.com/in/joshua-r-learned/",
      },
    ],
    linkedinURL: "https://www.linkedin.com/in/joshua-r-learned/",
  },
];
