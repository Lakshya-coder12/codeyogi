module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        40: "2.5rem",
      },
      margin: {
        12.5: "3.125rem",
        22.5: "5.625rem",
      },
      padding: {
        2.75: "0.688rem",
        6.25: "1.563rem",
        2.5: "0.625rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
