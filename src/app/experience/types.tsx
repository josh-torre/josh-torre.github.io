import { IconHammer, IconRocket, IconUser } from "@tabler/icons-react";
import { ReactNode } from "react";

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  logo: string;
  description: string[];
  endDate?: string;
  callout?: {
    icon: ReactNode;
    title: string;
    text: string;
  };
}

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Kubera Health",
    location: "New York, NY",
    startDate: "May 2025",
    endDate: undefined,
    logo: "company-logos/kubera-health.jpg",
    callout: {
      icon: <IconRocket />,
      title: "Impact",
      text: "Pre-seed stage startup where took ownership of features that mattered",
    },
    description: [
      "Delivered solutions for 200+ full-stack bugs and features by translating business requirements into React components, TRPC endpoints, PostgreSQL schemas and data pipelines while considering user and technical constraints",
      "Led the development of a contract scenario modeler, providing healthcare providers with historical insights and contractual impact projections; projected to generate significant long term revenue",
      "Implemented a compliance system for service rate change history to enable training of AI models",
      "Designed and manage AWS Cloud infrastructure for feature implementation and incident response",
      "Awarded performance-based equity for exceeding expectations of managers and peers",
      "Leveraged AI development tools like Claude Code, Cursor and Devin AI to develop features and accelerate development",
    ],
  },
  {
    title: "Teaching Assistant(TA) / Lead TA",
    company: "Khoury College of Computer Sciences",
    location: "Boston, MA",
    startDate: "Jan 2024",
    endDate: "May 2025",
    logo: "company-logos/khoury-college-logo.jpg",
    callout: {
      icon: <IconUser />,
      title: "Leadership",
      text: "Resposibile for a team of 15 peers to improve student experiences",
    },
    description: [
      "Taught 1,000+ students the fundamentals of computer science, software design, object oriented design patterns, functional programming techniques, and basic algorithms",
      "Led a team of 15 TAs to provide additional tutoring for students in need and measured student progress",
      'Designed and built a Racket "Universe Server" for the courses\' 500+ students to learn about client, server architecture and to utilize in their summative final project',
      "Contributed to cross-functional weekly team lead meetings to discuss student progress, align on goals, and resolve any team challenges from the week",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "SPIROL International Corperation",
    location: "Danielson, CT",
    startDate: "June 2021",
    endDate: "August 2024",
    logo: "company-logos/SPIROL-LOGO.jpg",
    callout: {
      icon: <IconHammer />,
      title: "Innovation",
      text: "Led first-ever process automation initiative at SPIROL",
    },
    description: [
      "Established the company's first-ever process automations using UIPath, an RPA tool.",
      "Developed automated pricing updates for SPIROL's catalog of 10,000+ parts, allowing the business to quickly respond to economic changes",
      "Implemented the Robotic Enterprise Framework (similar to a message queue) on existing projects to improve error handling and efficacy of the automation",
      "Collaborated across departments and locations to develop software automations to optimize business processes",
      "Upgraded the standards for technical and user documentation in Azure DevOps",
    ],
  },
];
