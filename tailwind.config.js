/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily:{
      interFont:["Inter","sans-serif"],
      manropeFont:["Manrope","sans-serif"],
      robotoFont:["Roboto","sans-serif"]

    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'main-color': '#47CC4D',
     
    },
    
  },
  plugins: [require("daisyui")],
}