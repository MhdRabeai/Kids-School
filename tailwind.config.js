/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    flowbite.content(),
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
    require("@tailwindcss/forms"),
    require("preline/plugin"),
  ],
};
