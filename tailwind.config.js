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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
