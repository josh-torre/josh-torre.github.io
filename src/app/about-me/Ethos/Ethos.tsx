export const Ethos = () => {
  const coreValues = [
    "People First",
    "Determination",
    "Empathy",
    "Ownership",
    "Curiosity",
    "Kindness",
    "Loyalty",
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full h-full">
      <div className="w-[80%] flex flex-row flex-wrap gap-4 justify-center items-center">
        {coreValues.map((value, idx) => {
          return (
            <div className="flex flex-nowrap items-center gap-2" key={idx}>
              <p className="text-xl font-bold hover:text-pastel-blue transition-colors duration-300 select-none">
                {value}
              </p>
              {idx + 1 !== coreValues.length ? (
                <span className="text-xl translate-y-[-0.05em] translate-x-[0.20em]">
                  •
                </span>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="w-[80%] max-w-3xl space-y-6 text-lg leading-relaxed">
        <p>
          These values guide how I work and collaborate with others. A few stand out in particular.
        </p>
        <p>
          Above all else, I value people. Without them, there is no product, no
          project, no feature, worth working on. I strive to build meaningful software that positively affects those around me
          whether it's friends in another department, or end users around the world.
        </p>

        <p>
          I also value curiosity in myself and others. I believe the best learning
          happens through genuine questions and collaborative exploration.
          When someone asks a question because they truly want to understand,
          I get excited to break it down in a way that clicks for them.
        </p>
      </div>
    </div>
  );
};

export default Ethos;
