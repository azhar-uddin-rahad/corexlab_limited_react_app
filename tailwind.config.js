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
      transparent  : 'transparent',
      current      : 'currentColor',
      'main-color' : '#47CC4D',
      'hover-color': 'rgba(76, 175, 80, 0.17)',
      'header-top' : 'rgba(157, 157, 157, 0.85)',
      'text-color' :  'rgba(0, 0, 0, 0.85);',
      'test-color' :  'red',
      'background-home' : '#1E1E1E',
      'white' : '#FFFFFF',
      'home-background' : '#F2F2F2',
      'sub-headerColor' : '#333333',
      'rating-color' : "#F4B30C",
      'pending-color' : '#F0BC37'

     
    },
    
  },
  plugins: [require("daisyui")],
}