import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0ff0fc", // azul neon tech
          dark: "#0cdbd7",
          light: "#aafafd",
        },
        background: {
          light: "#f8fafc",
          dark: "#0d1117", // estilo GitHub dark
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
