/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    fontFamily: {
      poppins: 'Poppins',
    },
    extend: {
      spacing: {
        13: '3.25rem',
      },
      colors: {
        primary: '#059669',
        dark: '#0f172a',
      },
    },
  },
  plugins: [],
};
