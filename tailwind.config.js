/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#006600", //green color
       
      },
      screens:{
        'one':'100px',
        'two':'200px',
        'three':'300px',
        'four':'400px',
        'five':'500px',
        'six':'600px',
        'seven':'700px',
        'eight':'800px',
        'nine':'900px',
        'ten':'1000px',
        'lg':'1050px',
        'xl':'1200px',
        '2xl':'1400px',
        'sevenxl':'1700px'
       }
    },
  },
  plugins: [],
}

