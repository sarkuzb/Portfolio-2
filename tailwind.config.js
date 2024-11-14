/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        geyser: {
          50: "#f5f7f9",
          100: "#e8edf1",
          200: "#d9e0e7",
          300: "#bcc8d4",
          400: "#9badbf",
          500: "#8395ae",
          600: "#71829f",
          700: "#657290",
          800: "#566077",
          900: "#474f61",
          950: "#2e333d",
        },
        link: {
          50: "#f5f7f9",
          100: "#e7ecf2",
          200: "#d9e1ea",
          300: "#b8c8d8",
          400: "#96acc4",
          500: "#7d93b4",
          600: "#6b7fa5",
          700: "#5f6e96",
          800: "#515c7c",
          900: "#444d64",
          950: "#2c313f",
        },
      },

      fontFamily: {
        bebas: ["'Bebas Neue'", "sans-serif"], // Add Bebas Neue here
        lilita: ["Lilita One", "cursive"], // Ensure the correct font name is used
      },
    },
  },
  plugins: [],
};
