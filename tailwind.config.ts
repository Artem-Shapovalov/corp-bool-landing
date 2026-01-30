import type { Config } from "tailwindcss";

export default {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Inter", "Segoe UI", "Roboto", "Arial"],
      },
      boxShadow: {
        soft: "0 18px 60px rgba(0,0,0,.28)",
      },
      colors: { ink: "#07070A" },
    },
  },
  plugins: [],
} satisfies Config;
