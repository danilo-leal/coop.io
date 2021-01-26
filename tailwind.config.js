module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans'],
      },
      fontSize: {
        tiny: '12px',
      },
      colors: {
        blackish: `#171717`,
        blackish2: `#262626`,
      },
      backgroundImage: (theme) => ({
        'hero-light': "url('/public/static/light-full-app.png')",
        'hero-dark': "url('/public//static/dark-full-app.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
