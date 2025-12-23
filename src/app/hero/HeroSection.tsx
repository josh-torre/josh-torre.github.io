import { IconChevronDown } from "@tabler/icons-react";
import { Chip } from "./Chip";

export const HeroSection = () => {
  return (
    <section id="hero">
      <div className="text-white flex flex-col relative">
        <div className="flex-1 flex flex-col items-center overflow-visible relative z-10">
          <div className="max-w-6xl w-full flex flex-col items-center overflow-visible">
            <p className="text-2xl font-light text-gray-300 mb-2">
              Hi there! My name is
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
              Josh Torre
            </h1>
            <div className="relative w-[500px] h-[520px] flex items-center justify-center overflow-visible">
              <div className="w-full h-[70%] bg-gradient-to-b from-neutral-600 to-neutral-800 rounded-[32px] absolute z-10 shadow-black shadow-2xl" />
              <img
                src="hero-images/grey-josh-headshot.png"
                alt="Josh Torre"
                className="absolute w-full h-[100%] z-30 object-cover object-bottom rounded-2xl"
              />
              {/* All chips start at the same center position (25%, 35%) 
                                and animate outward using transform */}
              <Chip
                label="Intentional"
                className="bg-pastel-teal"
                top="35%"
                left="25%"
                animation="swoopOut1"
                delay="0s"
              />
              <Chip
                label="Compassionate"
                className="bg-pastel-orange"
                top="35%"
                left="25%"
                animation="swoopOut2"
                delay="0.2s"
              />
              <Chip
                label="Self Driven"
                className="bg-pastel-blue"
                top="13%"
                left="25%"
                animation="swoopOut3"
                delay="0.4s"
              />
            </div>
          </div>
          <div className="animate-bounce">
            <IconChevronDown
              size={24}
              stroke={3}
              style={{ marginTop: "80px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
