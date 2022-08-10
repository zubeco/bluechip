/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        'side': '255px',
        'main': '937px'
      },
      height: {
        'myheight': '704px',
        'screenn': '130vh'
      },
      fontFamily: {
        'manrope': ['Manrope',],
      },
      colors:{
        'primary': "#959595",
        'faint': "#FCFBF8",
        'thick-yellow': "#F4BB15",
        'sec': "#616161",
        'secondary': "#E5E5E5",
        'third': "#616161",
        'fourth': "#FC6565",
        'fifth': "#FFD048",
        'sixth': "#EAE8E8",
        'seven': "#92999F",
        'eight': "#9D9D9D",
        'nine': "#494848",
        'ten': "#F9FAFA",
        'tenth': "#DFE4E8",
        'eleven': "#53C67A"
      },
      fontSize: {
        s: ['10px', '14px'],
      },
      boxShadow: {
        'myshadow': '0px 0px 4px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};
