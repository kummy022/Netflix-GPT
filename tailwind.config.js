/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        gold: '#FFD700',
        silver: '#C0C0C0',
        teal: '#008080',
        red: '#FF0000',
        darkGreen: '#004d00',
        deepPurple: '#6A0DAD',
      },
      spacing: {
        '72': '18rem',  // Custom spacing (72 = 18rem)
        '84': '21rem',  // Custom spacing (84 = 21rem)
      },
    },
  },
  darkMode: 'class',  // Enable class-based dark mode
}
