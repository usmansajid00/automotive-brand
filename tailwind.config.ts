import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--brand-bc1)",
        foreground: "var(--brand-bc5)",
        brand: {
          bc1: "var(--brand-bc1)",
          bc2: "var(--brand-bc2)",
          bc3: "var(--brand-bc3)",
          bc4: "var(--brand-bc4)",
          bc5: "var(--brand-bc5)",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widest3: "0.3rem",
        tight2: "-0.2rem",
        tight1: "-0.1rem",
      },
    },
  },
  plugins: [],
};

export default config;
