/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./styles/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        card1: "21px 21px 50px #080613, -21px -21px 50px #221a4d",
      },
      backgroundImage: {
        "hero-pattern": "url('/public/assets/hero/herobg.png')",
        "wave-shap": "url('/public/assets/hero/wave-shap.png')",
        pattern: "url('/public/assets/hero/pattern.png')",
        banner: "url('/public/assets/hero/banner2.jpg')",
        banner3: "url('/public/assets/hero/banner3.png')",
      },
    },
  },
  plugins: [],
};
