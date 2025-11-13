import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { 400: "#22d3ee" },
        base: { 950: "#0b1220" }
      },
      container: { center: true, padding: "1rem" },
      backgroundImage: {
        "hero-mesh": "radial-gradient(800px 400px at 100% 0%, rgba(34,211,238,0.06), transparent)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
export default config;
