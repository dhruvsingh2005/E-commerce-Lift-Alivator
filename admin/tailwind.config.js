/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#c9a74a',
        'background-light': '#1f2933', // lighter dark for panels
        'background-dark': '#111827',  // main admin background
        'obsidian': '#111827',         // navbar / sidebar background
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
