// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,vue,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        'white-soft': '#f8f8f8',
        'white-mute': '#f2f2f2',
        black: '#000000',
        'black-soft': '#222222',
        'black-mute': '#282828',
        indigo: '#2c3e50',

        // Divider
        'divider-light-1': 'rgba(60, 60, 60, 0.29)',
        'divider-light-2': 'rgba(60, 60, 60, 0.12)',
        'divider-dark-1': 'rgba(84, 84, 84, 0.65)',
        'divider-dark-2': 'rgba(84, 84, 84, 0.48)',

        // Text
        'text-light-1': '#2c3e50',
        'text-light-2': 'rgba(60, 60, 60, 0.66)',
        'text-dark-1': '#ffffff',
        'text-dark-2': 'rgba(235, 235, 235, 0.64)',
      },

      // Section gap spacing
      spacing: {
        'section': '160px',
      },

      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },

      transitionProperty: {
        skin: 'color, background-color',
      },
    },
  },
  darkMode: 'media', // Uses prefers-color-scheme
  plugins: [],
}
