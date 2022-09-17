/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "primary-red": "hsl(1, 90%, 64%)",
        "primary-blue": "hsl(219, 85%, 26%)",
        white: "hsl(0, 0%, 100%)",
        "grayish-blue-100": "hsl(210, 60%, 98%)",
        "grayish-blue-200": "hsl(211, 68%, 94%)",
        "grayish-blue-300": "hsl(205, 33%, 90%)",
        "grayish-blue-400": "hsl(219, 14%, 63%)",
        "grayish-blue-500": "hsl(219, 12%, 42%)",
        "grayish-blue-600": "hsl(224, 21%, 14%)",
      },
    },
  },
  plugins: [],
};
