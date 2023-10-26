/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        backgroundImage: {
                'slider1': "url('https://img.freepik.com/free-vector/autumn-landscape-with-trees-night_107791-11603.jpg?size=626&ext=jpg&ga=GA1.1.1988648825.1693217648&semt=ais')",
                'slider2': "url('https://img.freepik.com/free-vector/space-game-level-background-with-platforms_107791-3660.jpg?w=1380&t=st=1698211072~exp=1698211672~hmac=e5da6ffd95b3da3aa2f00a9f1aac6c97170f15cbc6af4bd712c64836716f4415')",
              },
        animation: {
                'animation-thump': 'thump 1s linear infinite',
              },
        keyframes: {
        thump: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        }
      }      
        
    },
  },
  plugins: [],
}

