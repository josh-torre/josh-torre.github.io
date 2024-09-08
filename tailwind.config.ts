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

      },
      keyframes: {
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        }
      },
      animation: {
        blink: 'blink 1s ease-in-out infinite',
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
