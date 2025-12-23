import { Experience } from "./types";

interface ExperienceCardProps {
  experience: Experience;
  isLeft: boolean;
  isVisible: boolean;
}

export const ExperienceCard = ({
  experience,
  isLeft,
  isVisible,
}: ExperienceCardProps) => {
  const { title, company, location, startDate, endDate, logo, description } =
    experience;
  const dateText = `${startDate} - ${endDate || "Present"}`;

  return (
    <div
      className={`md:w-[calc(50%-3rem)] transition-all duration-700 ${
        isLeft ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16"
      } ml-16 md:ml-0`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateX(0)"
          : `translateX(${isLeft ? "-50px" : "50px"})`,
        transitionDelay: isVisible ? "300ms" : "0ms",
      }}
    >
      <div className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700 shadow-xl hover:shadow-2xl hover:border-neutral-600 transition-all duration-300">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 bg-neutral-700 rounded-lg flex-shrink-0 overflow-hidden">
            <img
              src={logo}
              alt={company}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement!.style.background =
                  "linear-gradient(135deg, #525252 0%, #404040 100%)";
              }}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
            <p className="text-lg text-gray-300 font-semibold">{company}</p>
            <p className="text-sm text-gray-500 mt-1">{location}</p>
            <p className="text-sm text-gray-400 mt-2 md:hidden">{dateText}</p>
          </div>
        </div>

        <ul className="space-y-2 mt-4">
          {description.map((bullet, idx) => (
            <li key={idx} className="text-gray-300 flex items-start gap-2">
              <span className="text-neutral-500 flex-shrink-0">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`hidden md:block absolute top-8 w-12 h-0.5 bg-neutral-700 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${isLeft ? "right-0" : "left-0"}`}
        style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
      />
    </div>
  );
};
