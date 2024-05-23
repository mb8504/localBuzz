/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Logo: ["Courgette", 'cursive'],
      },
      width: {
        '1/5': '20%', // Custom width
        '24.6': '24.6%',  // Slightly less than 25%
      },
      colors: {
        'orange': '#F0840A'
      }
    },
  },
  plugins: [],
}