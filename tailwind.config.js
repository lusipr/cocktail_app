/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bl: {
          primary: "#001529",
          blue: "#47B5FF"
        }
      }
    },
  },
  plugins: [],
}