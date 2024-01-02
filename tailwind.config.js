/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "deep": "hsl(240, 100%, 5%)",
        "Soft": "hsl(5, 85%, 63%)",
      },
    },
  },
  plugins: [],
}