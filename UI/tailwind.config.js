/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      spacing: {
        67: "67px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        semiGray: "#828282",
        footerLinks: "#454545",
      },
      lineHeight: {
        30: "30px", // Custom class 'leading-custom-30'
        44: "44px",
      },
    },
  },
  plugins: [],
};
