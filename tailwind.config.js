/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Serif JP', 'serif'],
      },
      colors: {
        primary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        gold: {
          light: '#FFD700',
          DEFAULT: '#D4AF37',
          dark: '#B8860B',
        },
        luxury: {
          black: '#0A0A0A',
          darkGray: '#1A1A1A',
          gray: '#2A2A2A',
        },
      },
    },
  },
  plugins: [],
}
