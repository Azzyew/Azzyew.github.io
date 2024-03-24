/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'font': 'changeFont 5s linear infinite',
        'cursor': 'blink 1s step-end infinite',
      },
      keyframes: {
        changeFont: {
          '0%': { fontFamily: 'Poppins' },
          '33.3%': { fontFamily: 'M PLUS Code Latin' },
          '66.6%': { fontFamily: 'Playfair Display' },
          '100%': { transform: 'Cantata One' },
        },
        blink: {
          '0%, 100%': { background: 'transparent' },
          '50%': { backgroundColor: '#9ca3af' },
        }
      }
    },
  },
  plugins: [],
}

