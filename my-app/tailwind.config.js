/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00d4ff",
        darkbg: "#0a0f1c",
      },
      screens: {
        'custom': '850px',
      },
    },
  },
  plugins: [],
}