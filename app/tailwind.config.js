/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      'primary': '#3B6E99',
      'secondary': '#6CC1C3',
      'background': '#fffcef',
      'menu': '#F3F2DC',
      'footer': '#D3D2BC',
    },
    extend: {
      screens: {
        'print': {'raw': 'print'}
      }
    },
  },
  plugins: [],
}
