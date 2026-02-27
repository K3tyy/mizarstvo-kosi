/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#FAF9F6',
          100: '#F5F1E8',
          200: '#EBE5DA',
          300: '#D4A373',
          400: '#C08F71',
          500: '#A67C52',
          600: '#8C6239',
          700: '#6B4C35',
          800: '#4A3728',
          900: '#271C19',
          950: '#1A1210',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}