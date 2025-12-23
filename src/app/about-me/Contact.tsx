import { IconMail } from "@tabler/icons-react";
import { useState } from "react";

export const ContactContent = () => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="w-[100%] h-[100%] flex flex-col items-center justify-center">
      <p className="text-2xl">
        Below are the best ways you can reach out/see more of my work
      </p>
      <p className="text-xl text-neutral-300">
        Please, never hesitate to reach out, I am always happy to help :)
      </p>
      <div className="flex flex-row gap-16 items-center justify-center pt-8">
        <a
          className="w-fit flex flex-col items-center hover:opacity-80 transition-opacity"
          href="https://www.linkedin.com/in/joshua-torre/"
          target="_blank"
        >
          <img
            src={"/socials-logos/linkedin.svg"}
            alt="Linkedin Logo"
            width={60}
            height={60}
          />
          <p className="text-xl pt-2">Linkedin</p>
        </a>
        <a
          className="w-fit flex flex-col items-center hover:opacity-80 transition-opacity"
          href="https://github.com/josh-torre"
          target="_blank"
        >
          <img
            src={"/socials-logos/github-mark-white.svg"}
            alt="Github Logo"
            width={60}
            height={60}
          />
          <p className="text-xl pt-2">Github</p>
        </a>
        <span
          className="w-fit flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity duration-300"
          onClick={() => {
            navigator.clipboard.writeText(
              "torre [dot] jo [at] northeastern.edu"
            );
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
        >
          <IconMail size={60} />
          <p className="text-xl pt-2">
            {copied ? "Copied!" : "My email"} <br />
          </p>
        </span>
      </div>
    </div>
  );
};
