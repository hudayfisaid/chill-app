/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      colors: {
        'semi-gray': '#C1C2C4',
        'bg-gray': '#181A1C',
        'btn-gray': '#3D4142',
        'ring-gray': '#E7E3FC',
         'customBlue': '#0F1E93',
      },
    },
  },
  plugins: [],
}
