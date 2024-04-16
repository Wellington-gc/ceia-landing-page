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
      "white": "#ffffff",
      "black": "#000019",
      "gray": "#BCBCBC",
      "green": "#3BB76E",
      "primary-blue": "#01002C",
      "secondary-blue": "#2D2F61",
      "primary-light-blue": "#7A83BB",
      "secondary-light-blue": "#8E9BE5",
    }
  },
  plugins: [],
};
export default config;
