/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/heroImage.png')",
        shirts: "url('/shirts.avif')",
        jeans: "url('/jeans.jpg')",
        shoes: "url('/shoes.jpg')",
        accessories: "url(/accessories.jpeg)",
      },
      flexGrow: {
        5: "5",
      },
    },
  },
  plugins: [],
};
