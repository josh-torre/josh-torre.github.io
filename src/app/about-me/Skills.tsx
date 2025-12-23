interface Technology {
  name: string;
  file: string;
  rank?: number;
}

export default function SkillsSection() {
  const technologies: Technology[] = [
    { name: "Git", file: "git.svg", rank: 10 },
    { name: "React", file: "react.svg", rank: 9 },
    { name: "Linux", file: "lunix.svg", rank: 7 },
    { name: "Azure DevOps", file: "azure-devops.svg" },
    { name: "Racket", file: "racket.svg", rank: 6 },
    { name: "Node.js", file: "node.svg" },
    { name: "TypeScript", file: "ts.svg", rank: 10 },
    { name: "Bun", file: "bun.svg", rank: 8 },
    { name: "npm", file: "npm.svg" },
    { name: "Postman", file: "postman.svg" },
    { name: "Next.js", file: "next.svg", rank: 7 },
    { name: "Expo", file: "expo.svg", rank: 6 },
    { name: "DBeaver", file: "dbeaver.svg", rank: 8 },
    { name: "Codecov", file: "codecov.svg" },
    { name: "AWS", file: "aws-icon.svg", rank: 10 },
    { name: "PostgreSQL", file: "postgres.svg", rank: 10 },
    { name: "MongoDB", file: "mongodb.svg" },
    { name: "Python", file: "python.svg" },
    { name: "Kali Linux", file: "kali.svg" },
    { name: "Go", file: "golang.svg", rank: 9 },
    { name: "Linear", file: "linear.svg", rank: 7 },
    { name: "Vite", file: "vite.svg" },
    { name: "Java", file: "java.svg", rank: 10 },
    { name: "GitHub", file: "github.svg", rank: 8 },
    { name: "Tailwind CSS", file: "tailwind.svg", rank: 7 },
    { name: "Arch Linux", file: "arch-lunix.svg", rank: 9 },
    { name: "RabbitMQ", file: "rabbitmq.svg" },
    { name: "JavaScript", file: "js.svg", rank: 8 },
    { name: "Docker", file: "docker.svg", rank: 6 },
    { name: "Figma", file: "figma.svg", rank: 6 },
  ];

  technologies.sort((a, b) => (b.rank || 0) - (a.rank || 0));

  return (
    <div className=" text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          <span className="text-3xl text-white">
            {"Technologies I've Worked With"}
          </span>

          <div
            className={`mt-2  rounded-lg overflow-scroll transition-all max-h-[400px]`}
          >
            <div className="p-6 flex flex-wrap">
              {technologies.map((icon) => (
                <div
                  key={icon.file}
                  className="flex flex-col items-center p-3 hover:bg-zinc-900 rounded-lg transition-colors"
                >
                  <div className="w-16 h-16 mb-2 flex items-center justify-center">
                    <img
                      src={`/technology-icons/${icon.file}`}
                      alt={`${icon.name} Logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span className="text-sm text-zinc-300 text-center">
                    {icon.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
