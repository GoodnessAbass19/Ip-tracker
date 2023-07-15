/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url(/pattern-bg-desktop.png)",
        mobile: "url(/pattern-bg-mobile.png)",
      },
    },
  },
  plugins: [],
};
