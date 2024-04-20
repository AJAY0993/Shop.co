/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/heroImage.png')",
      },
      flexGrow: {
        5: "5",
      },
    },
  },
  plugins: [],
};
