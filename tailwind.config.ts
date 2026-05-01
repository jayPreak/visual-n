import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ishita: "#ff6fa5",
        jayesh: "#6fb1ff",
        narrator: "#e8e8e8",
      },
      fontFamily: {
        vn: ["ui-rounded", "system-ui", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
