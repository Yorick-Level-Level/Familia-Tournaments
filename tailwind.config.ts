import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        nexa: ['nexa-rust-sans-black-shadow'],
        intro: ['IntroRustG-BaseShade'],
        sweetRegular: ['SweetSansPro-Regular'],
        sweetMedium: ['SweetSansPro-Medium'],
        sweetBold: ['SweetSansPro-Bold'],
      },
      colors: {
        'custom-blue': '#1A4177',
        'custom-orange': '#E98B54',
        'custom-grey': '#E3DDDC'
      }
    },
  },
  plugins: [],
}
export default config
