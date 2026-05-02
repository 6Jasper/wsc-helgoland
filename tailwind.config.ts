import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#070B0F",
          surface: "#0E141B",
          panel: "#131C26",
          black: "#000000",
        },
        border: {
          subtle: "rgba(180,210,235,0.08)",
          strong: "rgba(255,255,255,0.14)",
        },
        text: {
          primary: "#eef3f7",
          muted: "rgba(200,220,235,0.62)",
          dim: "rgba(255,255,255,0.5)",
          body: "rgba(255,255,255,0.74)",
        },
        accent: {
          tide: "#5BA9D9",
          deep: "#1F4E73",
          warm: "#D9824A",
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
        glow: "0 0 80px rgba(91,169,217,0.18)",
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
