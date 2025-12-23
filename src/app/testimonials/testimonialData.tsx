export const testimonials = [
  {
    quote:
      "He[Josh] possess a rare ability to communicate intricate ideas with simplicity and precision, ensuring everyone is on the same page. This talent ensures alignment across various stakeholders, from peers to top-tier executives.",
    name: "Kevin Gibbs",
    title: "Business Process Analyst",
    image: "testimonials/kevin-gibbs.jpeg",
    linkedinURL: "https://www.linkedin.com/in/kevin-gibbs-07b18815b/",
  },
  {
    quote:
      "Josh has proven he can move seamlessly between roles that are traditionally split between a business analyst, systems analyst, and software developer on the team. I cannot emphasize enough Josh's multi-faceted and versatile skill set.",
    name: "Josh Learned",
    title: "Manager of Enrollment & Enrollment Systems - Medicare/D-SNP",
    image: "testimonials/josh-learned.jpeg",
    linkedinURL: "https://www.linkedin.com/in/joshua-r-learned/",
  },
  {
    quote:
      "He[Josh] went above and beyond to successfully develop a more capable tool than even his supervisor expected to be possible.",
    name: "Marco Spaeth",
    title: "US OEM Sales Manager",
    image: "testimonials/marco-spaeth.jpeg",
    linkedinURL: "https://www.linkedin.com/in/marco-spaeth-097277156/",
  },
];

export interface TestimonialType {
  quote: string;
  name: string;
  title: string;
  image: string;
  linkedinURL: string;
}
