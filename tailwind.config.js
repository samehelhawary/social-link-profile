/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        grey: {
          700: '#333333',
          800: '#1F1F1F',
          900: '#141414',
        },
        green: '#C4F82A'
      }
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        // Apply to all elements during page load
        '.preload *': {
          transition: 'none !important'
        },
      });
    },
  ],
}

