/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./constants/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "brown-black": "var(--brown-black)",
        "dark-blue": "var(--dark-blue)",
        "light-blue": "var(--light-blue)",
        yellow: "var(--yellow)",
        orange: "var(--orange)",
        "dark-grey": "var(--dark-grey)",
        "light-grey": "var(--light-grey)",
      },
      fontFamily: {
        helvetica: ["var(--font-helvetica-neon)"],
      },
    },
  },
  plugins: [],
};
