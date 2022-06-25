/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/ui/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    },
    colors: {
      description: '#54595F',
      white: '#fff',
      black: '#000',
      grey: {
        100: '#cfd8dc'
      },
      blue: {
        400: '#5c6bc0'
      },
      red: {
        400: '#ef5350',
        500: '#f44336'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar-hide')]
}
