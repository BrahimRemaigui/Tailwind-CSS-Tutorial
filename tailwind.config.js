/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        pramary :'#ececec'
      },
      fontFamily:{
        body:['Poppins']
      }
    },
  },
  plugins: [],
}