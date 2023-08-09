/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hemocyanin: "var(--hemocyanin)",
        ice: "var(--ice)",
        plum: "var(--plum)",
        purpleHaze: "var(--purpleHaze)",
        siphon: "var(--siphon)",
        sohoLights: "var(--sohoLights)",
      },
    },
  },
  plugins: [],
};
