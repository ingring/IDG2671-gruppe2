/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    // To use for example the lighter blue as backgroun-color, you type: "className=”bg-blue-lighter"
    colors: {
      blue: {
        lighter: '#DEE8F7',
        primary: '#204F99',
        darker: '#102442'
      },
      grey: {
        lighter: '#F8F8F8',
        light: '#F2F2F2',
        mediumLight: '#B7B7B7',
        medium: '#636363',
        darker: '#2B2B2B'
      },
      white: '#F9F9F9',
      green: '#D0ECCD',
      red: '#FFAFAF'
    }
  },
  fontFamily: {
    'inter': ['Inter', 'sans-serif']
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ]
}