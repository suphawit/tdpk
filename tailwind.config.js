const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        108: '27rem',
      },
      maxHeight: {
        520: '32.5rem',
        212: '53rem',
      },
      lineHeight: {
        'extra-loose': '2.3',
        12: '3rem',
      },
      colors: {
        'bright-green': '#00FF00',
        'link-blue': '#3297CE',
        'bullet-navy': '#0097CE',
        'mid-gray': '#E0E0E0',
        'cerise-red': '#E43D71',
        'true-v': '#8A69D4',
        'light-gray': '#F5F5F5',
        'thunder-gray': '#717171',
        'metallic-gray': '#CDCDCD',
        'default-gray': '#DBDEE7',
        'medium-gray': '#E0E5EB',
        'mid-black': '#1C1C1B',
        'light-red': '#FF0000',
        'light-purple': '#DCD2F2',
        'light-orange': '#EAEAEA',
        'mid-white': '#F7F7F7',
      },
      padding: {
        100: '100%',
        30: '7.5rem',
        18: '4.5rem',
      },
      boxShadow: {
        custom: '0px 10px 40px rgb(0 0 0 / 20%)',
        'custom-sm': '0px 5px 20px rgb(0 0 0 / 20%)',
      },
      borderWidth: {
        6: '6px',
      },
    },
  },
  variants: {
    extend: {
      margin: ['first'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-pseudo-elements'),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.section-display': {
          content: "''",
          display: 'block',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          'z-index': '0',
        },
        '.theme-light': {
          'background-color': 'rgba(255,255,255,.9)',
        },
        '.theme-dark': {
          'background-color': 'rgba(0,0,0,.8)',
        },
      };
      addUtilities(newUtilities, {
        variants: ['before', 'after'],
      });
    }),
  ],
};
