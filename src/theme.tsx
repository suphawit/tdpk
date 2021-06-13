import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
});

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: 'objektiv-mk2, sans-serif'
      }
    }
  },
  colors: {
    black: '#16161D',
    green: '#00FF00',
    white: '#FFF',
    purple: '#8A69D4',
    blue: '#0097CE',
    gray: {
      '300': '#F5F5F5',
      "500": '#979797'
    }
  },
  fonts,
  breakpoints,
});

export default theme;
