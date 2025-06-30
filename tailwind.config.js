/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    "./assets/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: '#428100',
        primary: '#5ca330',
        holy: '#fff',
        devil: '#000',
        burn: '#ccc',
      },
      backgroundImage: {
        'home': "url('/assets/img/Home.png')", 
      },
      fontFamily: {
        roboto: ['Roboto']
      },
      boxShadow: {
        '3xl': '8px 6px 15px #000',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow-home': {
          'text-shadow': '3px 2px 3px #000',
        },
      })
    }
  ],
}

