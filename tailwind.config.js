/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
  fontFamily: {
    serif: [
      "tenez",
      "Georgia",
      "Cambria",
      '"Times New Roman"',
      "Times",
      "serif",
    ],
    sans: [
      "sofia-pro",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ],
  },
};
