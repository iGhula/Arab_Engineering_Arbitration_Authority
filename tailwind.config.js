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
          DEFAULT: '#007eb5', // Logo Cyan Blue
        },
        secondary: {
          DEFAULT: '#d69e2e', // Logo Gold
        },
        dark: {
          DEFAULT: '#02182b', // Darker navy for better contrast with cyan
        },
        light: {
          DEFAULT: '#f9f9f9',
        }
      }
    },
  },
  plugins: [],
}

