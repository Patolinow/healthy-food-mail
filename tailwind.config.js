/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      'light-green': "#B3DFB2",
      'dark-green': "#425437",
      'green': "#4E8228",
      'brown': "#400A0A",
      'lime': "#f7fee7",
      'white': "#FFFFFF",
      'hover-green': "#548C2B"
    },

    fontFamily: {
      'Arial' : ["Arial", "Helvetica", "sans-serif"]
    },

    extend: {
      backgroundImage: {
        'footer-img': "url('../assets/footer-vegetables-credits-to-dose-juice.jpg')"
      }
    },
  },
  plugins: [],
}
