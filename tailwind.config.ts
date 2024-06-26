import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      bg_gray: "#232324",
      gray: "#363738",
      primary: "#E1E3E6",
      secondary: "#B0B1B6",
      tetriary: "#76787A",
      accent: "#0047BB",
      error: "#DB4546",
      yellow: "#FFB649"
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1494px",
    },
  },
  plugins: [],
};
export default config;
