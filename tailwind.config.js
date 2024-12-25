/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spark-horizontal': 'spark-horizontal 3s linear infinite',
        'spark-horizontal-reverse': 'spark-horizontal-reverse 3s linear infinite',
        'spark-vertical': 'spark-vertical 3s linear infinite',
        'spark-vertical-reverse': 'spark-vertical-reverse 3s linear infinite',
        'border-glow': 'border-glow 0.3s ease-out forwards',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'cursor-blink': 'cursor-blink 1s step-end infinite',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};