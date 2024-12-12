/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        yellow : {
          100: "#fbf9ef",
          200: "#fffacb",
        },
        gray: {
          600: "#4a4d4f",
          700: "#585662",
          800: "#4c4c4c",
        },
        green: {
          400: "#009944",
        },
      },
      screens: {
        'xs': '480px',
      },
      fontFamily: {
        'sans': ['"Noto Sans TC"', '"Microsoft JhengHei"'],
        'genjyuu-light': ['"GenJyuuGothic-Light"', '"sans-serif"'],
        'genjyuu-bold': ['"GenJyuuGothic-Bold"', '"sans-serif"'],
        'openhuninn': ['"jf-openhuninn"', '"sans-serif"'],
      },
    },
  },
  plugins: [],
}

