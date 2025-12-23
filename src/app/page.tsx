"use client";
import { NavBar } from "./nav-bar/NavBar";
import { HeroSection } from "./hero/HeroSection";
import TestimonialSection from "./testimonials/testimonials";
import { WorkHistoryTimeline } from "./experience/ExpeirenceTimeline";
import ProjectsSection from "./projects/ProjectsContainer";
import AboutMe from "./about-me/AboutMe";

const Main = () => {
  return (
    <div>
      <NavBar />
      <div className="pt-4">
        <HeroSection />
      </div>
      <TestimonialSection />
      <WorkHistoryTimeline />
      <ProjectsSection />
      <AboutMe />
    </div>
  );
};

export default Main;
