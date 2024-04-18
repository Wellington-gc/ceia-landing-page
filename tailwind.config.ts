import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      "white": "#FFFFFF",
      "black": "#000000",
      "primary-dark-blue": "#041026",
      "secondary-dark-blue": "#013A65",
      "primary-light-blue": "#2789FD",
      "secondary-light-blue": "#1DBBFB",
    }
  },
  plugins: [],
};
export default config;
