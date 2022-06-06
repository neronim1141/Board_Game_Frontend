module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,jsx}'],

  darkMode: true,
  theme: {
    extend: {}
  },
  plugins: [require('tailwindcss-radix')()]
};
