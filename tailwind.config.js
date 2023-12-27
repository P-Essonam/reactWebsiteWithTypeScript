/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '6xl': ['56px', '98px'],
      '8xl': ['96px', '106px']
    },
    lineHeight: {
      xs: ['16px', '20px'],
      sm: ['20px', '28px'],
      base: ['24px', '29.5px'],
      lg: ['28px', '32.94px'],
      xl: ['32px', '36.38px'],
      '2xl': ['36px', '41.26px'],
      '3xl': ['40px', '60px'],
      '4xl': ['60px', '68px'],
      '6xl': ['68px', '108px'],
      '8xl': ['108px', '118px'],
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#23272f",
        "btn": "#087ea4",
        "fg": "#f6f7f9",
        "secondary": "#181a1f",
        "banner": "#374151",
        "search": "#343944",
      },

    },
  },
  plugins: [],
}