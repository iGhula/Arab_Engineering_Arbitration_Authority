/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0b4b7a', // Dark blue
        },
        secondary: {
          DEFAULT: '#c8953f', // Gold
        },
        light: {
          DEFAULT: '#f9f9f9', // Very light gray for backgrounds
        }
      }
    },
  },
  plugins: [],
}

