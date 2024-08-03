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
      keyframes: {
        changeButtonText: {
          '0%': {color: '#FFFFFF'},
          '100%': {color: '#ff8626'}
        },
        blinkingCarrot: {
          '0%': {'border-color': '#FFFFFF'},
          '100%': {'border-transparency': 'transparent'},
        }
      },
      animation:{
        focused: "changeButtonText 0.25s forwards",
        blinking: "blinkingCarrot 0.75s infinite",
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
