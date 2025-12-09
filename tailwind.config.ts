import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', "Inter", "ui-sans-serif"],
        sans: ["Inter", "ui-sans-serif"],
      },
      colors: {
        bg: "#070709",
        panel: "#0f1018",
        accent: "#c10f36",
        accent2: "#6b76ff",
      },
      boxShadow: {
        glow: "0 0 30px rgba(203, 29, 70, 0.45)",
        glow2: "0 0 80px rgba(107, 118, 255, 0.32)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;

