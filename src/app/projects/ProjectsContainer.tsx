import { useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import { projectData } from "./projectData";

export default function ProjectsSection() {
  const sectionRef = useRef(null);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="px-4 py-20 relative min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Projects</h2>
        </div>

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
