/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: { colors:{
      'navy': {
        300:'red',
        400:'blue',
        500:'green',
      }
    }},
   
  },
  plugins: [],
}
