/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // 👇 이 부분을 추가하거나 수정하세요.
      colors: {
        'main-pink': '#FFEAFB',
        'hot-pink': '#FF00CC',
        'light-pink': '#F39FE2',
        // 여기에 다른 커스텀 색상을 계속 추가할 수 있습니다.
      },
    },
  },
  plugins: [],
}