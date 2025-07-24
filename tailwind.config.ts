// tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        border: "var(--border)",
        primary: "var(--primary)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        "glow-start": "#00ffff", // CubeBackground
        "glow-end": "#0077ff",  // CubeBackground
        "glow-dark-start": "#ff00ff", // CubeBackground
        "glow-dark-end": "#aa00ff", // CubeBackground
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      // CubeBackground
      backgroundImage: {
        "gradient-glow": "linear-gradient(90deg, #00ffff, #0077ff, #00ffff)", 
      },
      // CubeBackground
      animation: {
        "gradient-move": "gradientMove 3s linear infinite",
      },
      // CubeBackground
      keyframes: {
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
