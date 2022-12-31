/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./{_includes,_layouts}/**/*.html", "./*.html"],
  theme: {
    extend: {
      colors: {
        accent: colors.red,
      },
    },
  },
  plugins: [],
};
