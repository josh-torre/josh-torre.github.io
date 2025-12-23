import { ReactElement, useEffect, useState } from "react";
import { ArchiveContent } from "./archive/ArchiveContent";
import { Ethos } from "./Ethos/Ethos";
import {
  IconArchive,
  IconBrandSpotify,
  IconCode,
  IconSend,
  IconUserHeart,
} from "@tabler/icons-react";
import { ContactContent } from "./Contact";
import SkillsSection from "./Skills";
import MusicContent from "./music/MusicContent";

const sections = [
  { id: "archive", label: "Archive", icon: <IconArchive size={20} /> },
  { id: "ethos", label: "Ethos", icon: <IconUserHeart size={20} /> },
  { id: "music", label: "Music", icon: <IconBrandSpotify size={20} /> },
  {
    id: "contact",
    label: "Contact",
    icon: <IconSend size={20} />,
  },
  { id: "skills", label: "Skills", icon: <IconCode size={20} /> },
];

const contentMap: Record<string, ReactElement> = {
  archive: <ArchiveContent />,
  ethos: <Ethos />,
  music: <MusicContent />,
  contact: <ContactContent />,
  skills: <SkillsSection />,
};

export default function AboutMe() {
  const [activeSection, setActiveSection] = useState("archive");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const match = hash.match(/^#about-me-(\w+)$/);
      if (match && sections.some((s) => s.id === match[1])) {
        setActiveSection(match[1]);
        document.getElementById("about-me")?.scrollIntoView();
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleTabClick = (sectionId: string) => {
    setActiveSection(sectionId);
    window.location.hash = `about-me-${sectionId}`;
  };

  return (
    <section id="about-me" className="px-4">
      <div className="max-w-[65vw] mx-auto pb-20">
        <h2 className="text-4xl font-medium text-center mb-12 text-white">
          About Me
        </h2>

        <div className="relative">
          <div className="flex items-end gap-0.5 relative z-10">
            {sections.map((section, index) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => handleTabClick(section.id)}
                  style={{ zIndex: isActive ? 20 : 10 - index }}
                  className={`
                    relative flex items-center gap-2 px-5 py-3 text-sm
                    transition-all duration-150 
                    rounded-t-xl
                    ${
                      isActive
                        ? "bg-neutral-900 text-white border-t border-l border-r border-neutral-700"
                        : "bg-neutral-800 text-neutral-500 hover:text-neutral-300 border-t border-l border-r border-neutral-800 hover:bg-neutral-750"
                    }
                  `}
                >
                  <span className="flex-shrink-0">{section.icon}</span>
                  <span>{section.label}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-900" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="bg-neutral-900 border border-neutral-700 rounded-b-xl rounded-tr-xl overflow-hidden h-[550px] p-8">
            {contentMap[activeSection]!}
          </div>
        </div>
      </div>
    </section>
  );
}
