import { useState, useEffect, useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import { projectData } from "./projectData";

export default function ProjectsSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            //trigger all cards to animate in sequence
            projectData.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev: number[]) =>
                  prev.includes(index) ? prev : [...prev, index]
                );
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
              isVisible={visibleItems.includes(projectData.indexOf(project))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
