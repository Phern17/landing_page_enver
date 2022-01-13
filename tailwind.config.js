module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mons': ['Montserrat'],
      },
      backgroundImage: {
        'code': "url('./images/code.svg')",
        'layers': "url('./images/layer.svg)",
        'code_yellow': "url(./images/code_yellow.svg)",
      }
    },
  },
  plugins: [],
}
