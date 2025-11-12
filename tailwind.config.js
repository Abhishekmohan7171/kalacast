/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jersey': ['"Jersey 10"', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#000000',
        'dark-gray': '#1a1a1a',
        'medium-gray': '#4a4a4a',
        'light-gray': '#888888',
        'border-gray': '#333333',
      },
      brightness: {
        '90': '.9',
        '110': '1.1',
      },
      contrast: {
        '110': '1.1',
      },
    },
  },
  plugins: [],
}
