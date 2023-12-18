/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      spartan: ["League Spartan", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-mobile":
        "url('img/hero-bg-mobile.jpg')"
       }

    },
  
  },
  plugins: [],
}
