module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
        pyeongchang: ['"PyeongChang Peace"', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}