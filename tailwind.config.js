const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{_includes,_layouts}/**/*.{html,liquid}", "./*.{html,liquid}"],
  theme: {
    extend: {
      colors: {
        accent: colors.red,
      },
      minHeight: {
        14: defaultTheme.spacing["14"],
      },
    },
  },
  plugins: [require("tailwindcss-logical")],
};
