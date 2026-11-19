import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF8F5",
        magenta: "#A52B70",
        plum: "#642044",
        champagne: "#C4A478",
        charcoal: "#242824",
        beige: "#EDE7DF",
        gold: "#B89B58",
      },
      keyframes: {
        "wa-pulse": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "80%, 100%": { transform: "scale(1.8)", opacity: "0" },
        },
      },
      animation: {
        "wa-pulse": "wa-pulse 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      fontFamily: {
        serif: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
        heading: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        sinhala: ["var(--font-sinhala)", "var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
