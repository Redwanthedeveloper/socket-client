module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '85v': '85vh',
        '90v': '90vh',
        '100v': '100vh',
      },
      maxWidth: {
        '1000px': '1000px',
      },
      minWidth: {
        '800px': '800px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
