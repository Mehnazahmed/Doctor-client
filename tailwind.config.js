/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#0FCFEC",

          secondary: "#19D3AE",

          accent: "#3A4256",

          neutral: "#2b3440",

          "base-100": "#ffffff",

          

          
        },
      },
      {
        dark: {
          primary: "#0FCFEC",

          secondary: "#111827",

          accent: "#0891b2",

          neutral: "#f3f4f6",

          "base-100": "#1f2937",
          "base-200": "#0891b2",

          

          
        },
      },

    ],
  },
  plugins: [require("daisyui")],
};
