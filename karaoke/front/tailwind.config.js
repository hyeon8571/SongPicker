/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        glow: 'glow 3s ease infinite', // 애니메이션 이름과 반복 시간 설정
      },
      keyframes: {
        glow: {
          '0%': { filter: 'drop-shadow(0 0 100px rgba(255, 0, 0, 1))' }, // 빨강
          '25%': { filter: 'drop-shadow(0 0 100px rgba(0, 255, 0, 1))' }, // 초록
          '50%': { filter: 'drop-shadow(0 0 100px rgba(0, 0, 255, 1))' }, // 파랑
          '75%': { filter: 'drop-shadow(0 0 100px rgba(255, 255, 0, 1))' }, // 노랑
          '100%': { filter: 'drop-shadow(0 0 100px rgba(255, 0, 255, 1))' }, // 보라
        },
      },
    },
    colors: {
      purple: '#9747FF',
      pink: '#FF24BD',
      blue: '#575ED2',
      white: '#ffffff',
      black: '#000000',
    },
    fontFamily: {
      sans: ['Pretendard', 'sans-serif'],
      pyeongchang: ['"PyeongChang Peace"', 'sans-serif'],
    },
  },
  plugins: [require('daisyui')],
};
