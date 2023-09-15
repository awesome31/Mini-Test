import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        // ... other font families
      },
    },
    colors: {
      primaryBorder: "#35373B",
      secondaryText: "#7F8084",
      primaryText: "#FFFFFF",
      tertiaryText: "#C5C7CA",
      headingText: "#6B6C70",
      primaryBlack: "#131319",
      secondaryBlack: "#27292D",
      tertiaryBlack: "#191920",
      secondaryBorder: "#969696",
      primaryBlue: "#4A96FF",
      blackRgba2: "rgba(0, 0, 0, 0.8)",
    },
  },
  plugins: [],
};
export default config;
