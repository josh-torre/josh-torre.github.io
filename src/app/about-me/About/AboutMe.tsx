import React, { useState } from "react";
import { SectionHeader } from "../../core-components/SectionHeader";
import { ArchiveContent } from "../archive/ArchiveContent";
import { Ethos } from "../Ethos/Ethos";
import {
  IconArchive,
  IconBrandSpotify,
  IconCode,
  IconSend,
  IconUserHeart,
  IconArrowLeft,
} from "@tabler/icons-react";
import { ContactContent } from "../Contact/Contact";
import SkillsSection from "../Skills/Skills";
import MusicContent from "../music/MusicContent";
import BentoCard from "../BentoCard";

const sections = [
  {
    id: "contact",
    label: "Contact",
    description: "Get in touch with me",
    icon: <IconSend />,
    span: "col-span-2 sm:col-span-2",
  },
  {
    id: "archive",
    label: "Archive",
    description:
      "More about me! See where I've been and the stories that led me here",
    icon: <IconArchive />,
    span: "col-span-2 sm:col-span-2",
  },
  {
    id: "music",
    label: "Music",
    description: "What I'm listening to",
    icon: <IconBrandSpotify />,
    span: "col-span-2 sm:col-span-1",
  },
  {
    id: "ethos",
    label: "Ethos",
    description: "What I believe in and how I work",
    icon: <IconUserHeart />,
    span: "col-span-2 sm:col-span-2",
  },
  {
    id: "skills",
    label: "Skills",
    description: "Technologies and tools I use",
    icon: <IconCode />,
    span: "col-span-2 sm:col-span-1",
  },
];

const contentMap: Record<string, () => React.ReactElement> = {
  archive: () => <ArchiveContent />,
  ethos: () => <Ethos />,
  music: () => <MusicContent />,
  contact: () => <ContactContent />,
  skills: () => <SkillsSection />,
};

export default function AboutMe() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [visited, setVisited] = useState<Set<string>>(new Set());

  const handleSelect = (sectionId: string) => {
    setActiveSection(sectionId);
    setVisited((prev) => new Set(prev).add(sectionId));
  };

  const handleBack = () => {
    setActiveSection(null);
  };

  return (
    <section id="about-me" className="px-4">
      <div className="max-w-full md:max-w-[90vw] lg:max-w-[65vw] mx-auto pb-20">
        <SectionHeader label="About Me" title="The person behind the programs" className="mb-8 sm:mb-12" />

        {activeSection === null ? (
          <div className="min-h-[400px] sm:min-h-[500px] md:min-h-[550px] flex items-center justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full auto-rows-fr">
              {sections.map((section) => (
                <BentoCard
                  key={section.id}
                  section={section}
                  hasVisited={visited.has(section.id)}
                  onSelect={() => handleSelect(section.id)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-base text-gray-400 hover:text-gray-200 transition-colors mb-4"
            >
              <IconArrowLeft size={18} />
              <span>Back to About Me</span>
            </button>

            <div className="flex bg-neutral-800 border border-neutral-700 rounded-3xl shadow-2xl overflow-hidden min-h-[400px] sm:min-h-[500px] md:min-h-[550px] p-8 md:p-12 items-center justify-center">
              {contentMap[activeSection]?.()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
