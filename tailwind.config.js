/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#C5A572',
          'gold-light': '#E5D5B7',
          'gold-dark': '#8B7355',
          gray: '#2C2C2C',
          'gray-light': '#4A4A4A',
          'gray-dark': '#1A1A1A',
        },
      },
    },
  },
  plugins: [],
};