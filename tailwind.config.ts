import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Hierarchy palette — minimalista, deliberadamente distinta a Ehintelia (#0a1628 navy).
        // Apuesta visual: bone background + ink graphite + accent lima eléctrico.
        // Razón: el lima en HSL ~75° proyecta "performance/velocidad" sin caer en el azul corporativo
        // genérico de la competencia. El bone evita el blanco puro estéril y se siente premium en mobile.
        bone: {
          50: "#FBFAF6",
          100: "#F6F4ED",
          200: "#EAE7DB",
          300: "#D9D4C2",
        },
        ink: {
          50: "#F4F4F5",
          100: "#E4E4E7",
          200: "#A1A1AA",
          300: "#71717A",
          400: "#52525B",
          500: "#3F3F46",
          600: "#27272A",
          700: "#18181B",
          800: "#0F0F12",
          900: "#0A0A0C",
        },
        lime: {
          400: "#D7F26A",
          500: "#C4F542",
          600: "#A8E020",
          700: "#85B216",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
