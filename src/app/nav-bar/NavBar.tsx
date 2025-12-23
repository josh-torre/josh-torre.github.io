import { useState, useEffect, useRef } from "react";
import { IconMenu, IconX } from "@tabler/icons-react";
import { NavPill } from "./NavPill";

interface NavBarProps {
  selectedSection?: string;
}

export const NavBar = ({ selectedSection }: NavBarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ["Testimonials", "Experience", "Projects", "About Me"];
  const visibleSections = useRef<Set<string>>(new Set());

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) =>
      item.toLowerCase().replace(" ", "-")
    );
    const observers: IntersectionObserver[] = [];
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    };

    sectionIds.forEach((id, index) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.current.add(id);
              setActiveItem(navItems[index]);
            } else {
              visibleSections.current.delete(id);
              if (visibleSections.current.size === 0) {
                setActiveItem(null);
              }
            }
          });
        }, observerOptions);
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
      visibleSections.current.clear();
    };
  }, []);

  useEffect(() => {
    if (selectedSection !== undefined) {
      setActiveItem(selectedSection || null);
    }
  }, [selectedSection]);

  if (
    selectedSection &&
    !navItems.some(
      (header) => header.toUpperCase() === selectedSection.toUpperCase()
    )
  ) {
    throw new Error(`The given header is not one of, ${navItems}`);
  }

  const pillStyles = isScrolled
    ? "bg-neutral-900/70 backdrop-blur-sm px-4 py-2 rounded-full"
    : "px-4 py-2 rounded-full bg-transparent";

  return (
    <div className="px-6 py-4 md:px-12 md:py-8 lg:px-16 xl:px-20 flex justify-between items-center sticky top-0 z-50">
      <a
        href="#"
        className={`text-xl font-medium transition-all duration-300 cursor-pointer select-none ${pillStyles}`}
        onClick={() => {
          handleNavClick();
        }}
      >
        Josh Torre
      </a>

      <nav className="hidden md:flex gap-2 md:gap-3 lg:gap-4">
        {navItems.map((item) => (
          <NavPill
            key={item}
            label={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            isActive={activeItem?.toUpperCase() === item.toUpperCase()}
            isScrolled={isScrolled}
            onClick={() => handleNavClick()}
          />
        ))}
      </nav>

      <button
        className="md:hidden p-2 rounded-lg hover:bg-neutral-800/50 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <IconX className="w-6 h-6" />
        ) : (
          <IconMenu className="w-6 h-6" />
        )}
      </button>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden bg-neutral-900/95 backdrop-blur-sm border-t border-neutral-800 shadow-lg">
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <NavPill
                key={item}
                label={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                isActive={activeItem?.toUpperCase() === item.toUpperCase()}
                isScrolled={true}
                onClick={() => handleNavClick()}
              />
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};
