/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#FFF",
      black: "#000",
      primary: {
        500: "#b9bedc",
        900: "#8787c8",
      },
      gray: "#f5f5f5",
      "dark-gray": "#b4b4b4",
      cyan: "#87c3c8",
      green: "#c3c887",
      purple: "#9187c8",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
