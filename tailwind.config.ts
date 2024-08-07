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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'my-white': '#FFFFFF',
        'my-dark-blue': '#04253A',
        'my-tan': '#FFDDBF',
        'my-teal': '#4C837A',
        'my-lighter-teal': '#6ac5b6'
      }
    },
  },
  plugins: [],
};
export default config;
