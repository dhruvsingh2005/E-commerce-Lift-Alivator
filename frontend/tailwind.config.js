/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#c9a74a",
        "background-light": "#f8f7f6",
        "background-dark": "#0A0A0A",
        "obsidian": "#0A0A0A",
      },
      fontFamily: {
        "manrope": ["Manrope", "sans-serif"],
        "cormorant": ["Cormorant Garamond", "serif"],
      },
      animation: {
        'marquee': 'marquee 60s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
