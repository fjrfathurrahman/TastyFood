import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react"
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00A0F0",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1224px",
          "2xl": "1224px",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    typography(),
    nextui({
    themes: {
      colors: {
        colors: {
          primary: "#00A0F0",
        }
      }
    }
  })],
};
export default config;
