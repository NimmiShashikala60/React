/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: { colors:{
      'navy': {
        300:'red',
        400:'blue',
        500:'green',
      }
      
    }},
    // font-family: 'Roboto', sans-serif;
    fontFamily:{
      // "abc": {'Roboto', sans-serif}//select karana tikama danne oone index file eke link karapuwa
    }
   
  },
  plugins: [],
}
