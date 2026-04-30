import { useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import { projectData } from "./projectData";
import { SectionHeader } from "../core-components/SectionHeader";

export default function ProjectsSection() {
  const sectionRef = useRef(null);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="px-4 py-20 relative min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Projects" title="Things I've built" className="mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
