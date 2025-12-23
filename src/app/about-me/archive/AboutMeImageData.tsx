import { IconExternalLink } from "@tabler/icons-react";
import { ImageItem } from "./types";

export const aboutMeImages: ImageItem[] = [
  {
    id: 6,
    url: "/about-me/archive/netherlands-trip.jpeg",
    title: "Netherlands for ITICSE",
    width: 500,
    height: 500,
    date: new Date("2025-06-01"),
    description: (
      <>
        <p>
          With{" "}
          <a
            className="underline inline-flex items-center gap-1 "
            href="https://dl.acm.org/doi/epdf/10.1145/3724363.3729055"
            target="_blank"
          >
            research completed
            <IconExternalLink size={20} className="inline" />
          </a>{" "}
          with Professor Daniel Patterson, we were invited to the 2025 ITICSE
          conference in Nijmegen, Netherlands. I took this opportunity to meet
          other educators as well as explore Europe for the first time.
        </p>
      </>
    ),
  },
  {
    id: 7,
    url: "/about-me/archive/nyc-summer-2025.jpeg",
    title: "NYC Summer 2025",
    width: 500,
    height: 500,
    date: new Date("2025-08-01"),
    description: (
      <>
        <p>
          My work with Kubera health enabled me to relocate to New York and
          allowed me to explore the city in my free time. While there is a lot
          to love in the city, my favorite thing to do was to walk the Manhattan
          bridge(pictured here) to Chinatown to pick up some cheap eats.
        </p>
      </>
    ),
  },
  {
    id: 8,
    url: "/about-me/archive/sydney.jpeg",
    title: "Summer in Sydney",
    width: 500,
    height: 500,
    date: new Date("2024-07-01"),
    description: (
      <>
        <p>
          Under the great Professor Ian Gorton, I went abroad along with 20
          other students to Sydney, Australia. While in the Sydney area we
          studied, explored local cuisine, hiked forests of the blue mountains,
          visited animals at the zoo and even swam with sharks! It was truly an
          unforgettable month of discovery, growth and excitement.
        </p>
      </>
    ),
  },

  {
    id: 1,
    url: "/about-me/archive/kubera-office.jpeg",
    title: "Kubera Health HQ",
    width: 500,
    height: 500,
    date: new Date("2025-06-01"),
    description: (
      <>
        <p className="text-sm text-neutral-300">
          From humble beginnings, this was the Kubera Health office during my
          time in New York. This is where we hunkered down through many late
          nights to complete last-minute features and fuel ourselves on far too
          much coffee. At roughly the size of a typical NYC apartment, we
          quickly became a close knit team.
        </p>
      </>
    ),
  },
  {
    id: 2,
    url: "/about-me/archive/generate-offsite-fall2025.PNG",
    title: "Generate Offsite Fall 2025",
    width: 500,
    height: 500,
    date: new Date("2025-11-22"),
    description: (
      <>
        <p className="text-sm text-neutral-300">
          After many late nights building Prisere, our Generate team took a
          weekend off to explore Portsmouth, New Hampshire and Southern Maine.
          We even caught pictures with these celebrities on the way 👀
        </p>
      </>
    ),
  },
  {
    id: 4,
    url: "/about-me/archive/josh-japan.jpeg",
    title: "Robotics Trip to Japan",
    width: 500,
    height: 500,
    date: new Date("2023-01-01"),
    description: (
      <>
        <p>
          High school robotics was a formative experience for me. Not only was
          it my first exposure to the world of engineering, it was also the
          impetus for my work ethic. Late nights in a woodshop, early mornings
          driving to competitions across New England, and many engineering
          write-ups along the way led us to compete in the regional competition
          in Japan. We faced teams from across Asia and immersed ourselves in
          the culture while there.
        </p>
      </>
    ),
  },
  {
    id: 5,
    url: "/about-me/archive/josh-working-kubera.PNG",
    title: "Office Upgrades: Kubera Health",
    width: 500,
    height: 500,
    date: new Date("2025-09-01"),
    description: (
      <>
        <p>
          With a seed round of funding raised, the team at Kubera Health was
          able to get an office upgrade! This time, featuring windows! The
          location changed, but our caffeine habit didn't! The cups followed us
          to our new desks.
        </p>
      </>
    ),
  },
];
