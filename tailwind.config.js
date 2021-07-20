module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        navbar: "#0e1726",
        header: "#fafafa",
        sidebar: "#f1f2f3",
      },
      fontSize: {
        40: "2.5rem",
        13: "0.813rem",
      },
      margin: {
        12.5: "3.125rem",
        22.5: "5.625rem",
      },
      padding: {
        2.75: "0.688rem",
        6.25: "1.563rem",
        2.5: "0.625rem",
        3.5: "0.875rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
