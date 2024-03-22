/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4D4D4D',
          opacity: '#4D4D4Dd4',
          ligth: '#636262',
          300: '#4c4c4c',
          400: '#373737',
        },
        secondary: {
          DEFAULT: '#D4145A',
          opacity: '#D4145Ad4',
          ligth: '#da2d6c',
          300: '#cd1458',
          400: '#b4134e',
        },
        tertiary: {
          DEFAULT: '#ed4f44',
          opacity: '#ed4f44d4',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
