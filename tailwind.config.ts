import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#F4EFE6",
          surface: "#FBF7EE",
          panel: "#FFFFFF",
          ink: "#0E1722",
        },
        border: {
          subtle: "rgba(14,23,34,0.10)",
          strong: "rgba(14,23,34,0.22)",
        },
        text: {
          primary: "#0E1722",
          muted: "rgba(14,23,34,0.62)",
          dim: "rgba(14,23,34,0.45)",
          body: "rgba(14,23,34,0.78)",
        },
        accent: {
          tide: "#1F4E73",
          deep: "#0B2A4A",
          warm: "#B85B2D",
        },
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "Open Sans", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.18em",
        eyebrowWide: "0.22em",
        tightish: "-0.015em",
      },
      borderRadius: {
        none: "0",
        sm: "2px",
        DEFAULT: "4px",
        full: "9999px",
      },
      boxShadow: {
        glow: "0 0 80px rgba(31,78,115,0.15)",
        soft: "0 1px 2px rgba(14,23,34,0.04), 0 8px 24px rgba(14,23,34,0.06)",
      },
      maxWidth: {
        container: "1280px",
        stage: "1080px",
        copy: "720px",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
