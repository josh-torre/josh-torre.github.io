export default function MusicContent() {
  const years = [
    { year: "2022", minutes: 67805, days: 47, color: "bg-pastel-blue" },
    { year: "2023", minutes: 99699, days: 69, color: "bg-pastel-teal" },
    { year: "2024", minutes: 109598, days: 76, color: "bg-pastel-teal" },
    { year: "2025", minutes: 116875, days: 81, color: "bg-pastel-orange" },
  ];

  const totalMinutes = years.reduce((sum, y) => sum + y.minutes, 0);
  const totalDays = Math.round(totalMinutes / 1440);
  const maxMinutes = Math.max(...years.map((y) => y.minutes));

  return (
    <div className="w-full text-white flex flex-col items-center justify-between overflow-hidden">
      <div className="relative z-10 max-w-2xl w-full">
        <div className="mb-4 text-center">
          <h2 className="text-3xl font-bold">I Love Music</h2>
          <p className="text-neutral-400">(hot take I know)</p>
        </div>

        <div className="space-y-4 mb-5">
          {years.map((item, i) => (
            <div
              key={item.year}
              className="transition-all duration-500 ease-out opacity-100 translate-x-0"
              style={{
                transitionDelay: `${i * 50}ms`,
              }}
            >
              <div>
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <div className="flex items-baseline gap-3">
                    <span
                      className={
                        "text-sm font-semibold px-3 py-1 rounded-full text-white " +
                        item.color
                      }
                    >
                      {item.year}
                    </span>
                    <span className="text-xl font-bold">
                      {item.minutes.toLocaleString()}
                    </span>
                    <span className="text-neutral-500 text-sm">min</span>
                  </div>
                  <div className="text-neutral-400 text-sm">
                    that's{" "}
                    <span className="text-white font-semibold">
                      {item.days}
                    </span>{" "}
                    days straight
                  </div>
                </div>

                <div className="mt-3 h-1 bg-neutral-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{
                      width: `${(item.minutes / maxMinutes) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center text-center">
          <div className="flex-1 rounded-2xl p-4">
            <p className="text-neutral-400 text-sm mb-1">
              Total listening time
            </p>
            <p className="text-2xl font-bold mb-2">
              {totalDays}{" "}
              <span className="text-2xl text-neutral-400">days</span>
            </p>
            <p className="text-neutral-500 text-sm">
              {totalMinutes.toLocaleString()} minutes across 4 years
            </p>
          </div>

          <div className="flex-1 rounded-2xl p-4 ">
            <p className="text-neutral-400 text-sm mb-1">Top Genre</p>
            <p className="text-2xl font-bold">Indie Rock</p>
            <p className="text-neutral-500 text-sm">
              year after year after year
            </p>
          </div>
        </div>
      </div>

      <p className="text-neutral-400 text-sm mt-4">More coming soon...</p>
    </div>
  );
}
