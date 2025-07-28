/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ Enables dark/light mode toggle via class
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
