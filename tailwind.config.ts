import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
      },
      keyframes: {
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "white" },
        },
      },
      animation: {
        blink: "blink 1s ease-in-out infinite",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "pastel-teal": "#4A9B7F",
        "pastel-orange": "#D97B5C",
        "pastel-blue": "#5A7FB8",
        "deep-blue": "#0f1d30",
      },
    },
  },
  plugins: [],
};
export default config;
