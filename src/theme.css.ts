import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

export const theme = createGlobalTheme('#root, .ReactModalPortal', {
  color: {
    dark: {
      '1': '#4C4C4C',
      '2': '#1E1E1E',
      '3': '#1A1A1A',
      '4': '#121212',

      text: {
        primary: '#FFFFFF',
        secondary: '#BBBBBB',
      },

      contrast: {
        primary: '#FFFFFF',
      },
    },
  },
  typography: {
    fontFamily: '"Outfit", sans-serif',
  },
  effect: {
    dropShadow: {
      default: '0px 0px 4px rgba(246, 244, 244, 0.75)',
    },
  },
});

globalStyle('html, body', {
  width: '100%',
  height: '100vh',
});

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  fontFamily: theme.typography.fontFamily,

  scrollbarColor: `${theme.color.dark['1']} transparent`,
  scrollbarWidth: 'thin',
});
