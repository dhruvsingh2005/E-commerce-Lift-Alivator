/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#c9a74a',
        'background-light': '#1a1a1a',
        'background-dark': '#0a0a0a',
        'obsidian': '#050505',
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
