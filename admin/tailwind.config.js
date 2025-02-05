import FirstMain from './src/components/FirstMain';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d6ac60",
        secondary: "#fe784f",
        container: '#ad8a4b',
        first: "#ebcc8a",
        
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      backgroundImage: {
        FirstMain: "url(/src/assets/bg.png)",
      },
    },
  },
  plugins: [],
};