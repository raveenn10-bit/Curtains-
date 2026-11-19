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
        charcoal: "#252525",
        beige: "#EDE7DF",
      },
      fontFamily: {
        serif: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        sinhala: ["var(--font-sinhala)", "var(--font-dm-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
