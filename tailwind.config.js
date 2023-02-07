/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        "bg-image": "url('/src/assets/docbg-shap.png')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          "base-100": "#ffffff",
          "base-content": "#000000",
          neutral: "#242729",
          "neutral-content": "#ffffff",
          accent: "#ffffff",
          primary: '#6b707f',
          "base-200": '#003300'
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          "base-100": "#171717",
          "base-content": "#ffffff",
          neutral: "#f1f1f1",
          "neutral-content": "#2C303A",
          accent: "#3B3B3B",
          primary: '#f6f6f6',
          "base-200": '#f5deb3a8'
        },
      },
      "light",
      "dark",
    ],
  },
};
