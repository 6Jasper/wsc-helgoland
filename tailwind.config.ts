import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: "#0b2a4a",
          sea: "#10487a",
          tide: "#3a82b8",
          sand: "#f4ede0",
          cliff: "#c8412c",
          stone: "#1a1d22",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Helvetica", "Arial", "sans-serif"],
        display: ["ui-serif", "Georgia", "Cambria", "serif"],
      },
      maxWidth: {
        prose: "70ch",
      },
    },
  },
  plugins: [],
};

export default config;
