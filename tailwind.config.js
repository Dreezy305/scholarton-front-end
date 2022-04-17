module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      MontserratBold: "Montserrat-Bold",
      MontserratMedium: "Montserrat-Medium",
      MontserratRegular: "Montserrat-Regular",
      MontserratExtraBold: "Montserrat-ExtraBold",
      MontserratLight: "Montserrat-Light",
      MontserratExtraLight: "Montserrat-ExtraLight",
    },
    extend: {
      colors: { regularWhite: "#ffffff", bgRed: "#D7263D" },
      keyframes: {
        shake: {
          "10%, 90%": {
            transform: " translate3d(-1px, 0, 0)",
          },
          "20%, 80%": {
            transform: "translate3d(2px, 0, 0)",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0, 0)",
          },
          "40%, 60%": {
            transform: "translate3d(4px, 0, 0)",
          },
        },
      },
      animation: {
        shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
      },
    },
  },
  plugins: [],
};
