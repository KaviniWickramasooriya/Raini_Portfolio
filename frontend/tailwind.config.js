/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0a0a0c',
          card: '#121216',
          crimson: '#e11d48',
          gold: '#d4af37',
        }
      },
      letterSpacing: {
        luxury: '0.25em',
      }
    },
  },
  plugins: [],
}