/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        "grow-shrink": "grow-shrink 5s infinite ease-in-out",
      },
      keyframes: {
        "grow-shrink": {
          "0%, 100%": { transform: "scale(0.8)", opacity: "0.3" },
          "50%": { transform: "scale(1.2)", opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
}

