/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 5px 0px rgba(0, 0, 0, 0.5)',
      },
      spacing: {
        '128': '1400px',
        "chartTypeOne":'350px'
      }
    },
  },
  plugins: [],
}
