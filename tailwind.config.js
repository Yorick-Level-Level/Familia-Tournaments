import {nextui} from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-light-green': '#B0BCB0',
        'custom-dark-green': '#596559',
        'custom-brown': '#C29679',
        'custom-light-brown': '#E8DBD1',
        'custom-light-blue': '#E2E9EF',
        'custom-blue': '#1A4177',
        'custom-orange': '#E98B54',
        'custom-grey': '#E3DDDC'
      },
      fontFamily: {
        nexa: ['nexa-rust-sans-black-shadow'],
        intro: ['IntroRustG-BaseShade'],
        sweetRegular: ['SweetSansPro-Regular'],
        sweetMedium: ['SweetSansPro-Medium'],
        sweetBold: ['SweetSansPro-Bold'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
