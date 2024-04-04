/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'mplus': ['M PLUS Code Latin', 'monospace'],
      'playfairD': ['Playfair Display', 'serif'],
      'cantataOne': ['Cantata One', 'serif'],
    },
    extend: {
      animation: {
        'cursor': 'blink 1s step-end infinite',
        'fadeIn': 'show 1s ease-out forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { background: 'transparent' },
          '50%': { backgroundColor: '#9ca3af' },
        },
        show: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}

