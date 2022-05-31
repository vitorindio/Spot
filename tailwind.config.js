module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'owse-blue': '#0F6DB8',
        'owse-red': '#EB5723'
      },
      transitionDuration: {
        0: '0ms',
        2000: '2000ms'
      }
    }
  },
  plugins: []
}
