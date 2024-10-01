/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        btnBg: "#036ab5",
        bgColor: "#f2f4f6",
        primary: "#000000",
        secondary: "#6a737d",
      },
      fontFamily: {
        pop: ["Popins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
