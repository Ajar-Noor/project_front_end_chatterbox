/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F0F4FA",
          secondary: "#AFBBF7",
          accent: "#5B96F7",
          neutral: "#B4B4B4",
          "base-100": "#ffffff",
          dark: "#000",
        },
      },
      "night",
      "light",
    ],
  },
};
