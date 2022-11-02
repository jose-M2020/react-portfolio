/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const transform = plugin( ({ addUtilities }) => {
  addUtilities({
    '.transform-x': {
      transform: 'perspective(900px) rotateY(345deg)',
    },
  })
})

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      }
    },
  },
  plugins: [
    transform
  ],
}
