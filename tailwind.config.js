module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        sapGreen: "#334249",
      },
      width: {
        screen: "99.5vw",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
