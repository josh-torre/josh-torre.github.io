import { Project } from "./types";
import Image from "next/image";

const generateIcon = (
  <a href="https://generatenu.com/" target="_blank">
    <img
      className="object-cover transition-transform duration-500"
      src={"/project-images/generate-wire-frame.svg"}
      alt={"Photos of prisere designs"}
      width={30}
      height={30}
    />
  </a>
);

export const projectData: Project[] = [
  {
    id: 1,
    title: "Prisere",
    description:
      "Prisere is a disaster response platform designed for small to medium sized businesses to react to registered FEMA Natural Disasters. The platform is connected with Quickbooks to allow for streamlined processes and faster claim submission.",
    tags: [
      "TypeScript",
      "PostgreSQL",
      "AWS S3",
      "Supabase",
      "React",
      "TailwindCSS",
      "RESTful APIs",
      "TypeORM",
    ],
    github: "https://github.com/GenerateNU/prisere",
    image: (
      <Image
        className="w-full h-full object-cover transition-transform duration-500"
        src={"/project-images/prisere.png"}
        alt={"Photos of prisere designs"}
        width={600}
        height={300}
      />
    ),
    titleIcon: generateIcon,
  },
  {
    id: 2,
    title: "Dearly",
    description:
      "Dearly is a social platform for extended families to share their private moments. Invite only groups can be created for families where users can select their technical proficiency and interact with a UI that matches their technical ability; so everyone can contribute to the conversation.",
    tags: [
      "TypeScript",
      "PostgreSQL",
      "AWS S3",
      "AWS Lambda",
      "React",
      "Supabase",
      "TailwindCSS",
      "RESTful APIs",
      "DrizzleORM",
    ],
    github: "https://github.com/GenerateNU/dearly/",
    image: (
      <Image
        className="w-full h-full object-cover transition-transform duration-500"
        src={"/project-images/dearly.png"}
        alt={"Photos of dearly designs"}
        width={600}
        height={300}
      />
    ),
    titleIcon: generateIcon,
  },
  {
    id: 3,
    title: "Passwordle: Gamified Cyber Security Education",
    description:
      "Passwordle is a variant of the New York Times game, Wordle, aimed at educating users about password security. Users take turns guessing the current password which is sourced from RockYou.txt, one of the most popular password lists. Account creation, sessions, puzzle history and active puzzles are all handled by the custom backend.",
    tags: [
      "Go",
      "TypeScript",
      "MongoDB",
      "React",
      "TailwindCSS",
      "RESTful APIs",
    ],
    image: (
      <Image
        className="w-full h-full object-cover transition-transform duration-500"
        src={"/project-images/passwordle.png"}
        alt={"Photo of the Passwordle Splash Screen"}
        width={600}
        height={300}
      />
    ),
  },
  {
    id: 4,
    title: "Snapper",
    description:
      "Snapper is a gamified, social media platform for marine enthusiasts to share their scuba dives, the marine life they've found and the depths they reached. Users can earn badges from their dives and add to their collection of discovered marine life, encouraging users to reach new depths!",
    tags: [
      "TypeScript",
      "MongoDB",
      "React Native",
      "TailwindCSS",
      "RESTful APIs",
      "AWS S3",
    ],
    github: "https://github.com/GenerateNU/snapper",
    image: (
      <Image
        className="w-full h-full object-cover transition-transform duration-500"
        src={"/project-images/snapper.png"}
        alt={"Photos of snapper designs"}
        width={600}
        height={300}
      />
    ),
    titleIcon: generateIcon,
  },
  {
    id: 5,
    title: "Fractalang",
    description:
      "A hygienic Racket DSL for representing, computing, and rendering fractal images with interactive visualization. Supports both escape-time fractals and iterative fractals.",
    tags: ["Racket", "DSL", "Fractals", "Programming Languages"],
    image: (
      <Image
        className="w-full h-full object-cover transition-transform duration-500"
        src={"/project-images/mandelbrot.png"}
        alt={"Photos of snapper designs"}
        width={600}
        height={300}
      />
    ),
  },
  {
    id: 6,
    title: "Yahoo! Cloud Serving Benchmark + Transactions (YCSB+T)",
    description:
      "YCSB+T is a database benchmarking tool that provides comprehensive statistics on read, write, and commit latency for database transactions. As part of a 4-person agile team, we extended the existing codebase by implementing drivers for MongoDB, FoundationDB, and CassandraDB, enabling developers to make objective, data-driven decisions when selecting databases for their use cases. We enhanced the reporting system to track commit time differences between read and write operations, and developed a new write-focused workload to test write commit performance under load.",
    tags: [
      "Java",
      "NoSQL",
      "AWS EC2",
      "CassandraDB",
      "MongoDB",
      "FoundationDB",
      "Performance Benchmarking",
      "Agile Development",
    ],
  },
  {
    id: 7,
    title: "Context Aware Image Compression",
    description:
      "An image aware compression algorithm that identifies seams of pixels in an image that are of least importance and removes these pixels. Least importance was defined as pixels with the lowest energy, where energy measures local brightness gradients using weighted neighbor differences.",
    tags: ["Java", "Min Heaps", "Object Oriented Design"],
  },
];
