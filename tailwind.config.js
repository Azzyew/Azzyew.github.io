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
      },
      keyframes: {
        blink: {
          '0%, 100%': { background: 'transparent' },
          '50%': { backgroundColor: '#9ca3af' },
        }
      }
    },
  },
  plugins: [],
}

