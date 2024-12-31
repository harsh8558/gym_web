/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        glow: "glow 0.8s linear infinite",
        "pulse-shadow": "pulse-shadow 1.5s infinite",
      },
      keyframes: {
        glow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      fontFamily: {
        righteous: ['Righteous', 'sans-serif'],
        cofo: ['cofo-sans-pixel', 'sans-serif'],
      },
    },
  },
  plugins:[require('tailwindcss-motion')],
}

