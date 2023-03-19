/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
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
        lighter: '#EFEFEF',
        medium: '#636363',
        darker: '#2B2B2B'
      },
      white: '#F9F9F9',
      green: '#D0ECCD',
      red: '#F0B3B3'
    }
  },
  fontFamily: {
    
    'inter': ['Inter', 'sans-serif']
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ]
}