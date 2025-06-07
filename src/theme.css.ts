import { createGlobalTheme, globalStyle } from '@vanilla-extract/css'

export const theme = createGlobalTheme("#root", {
  color: {
    dark: {
      "1": "#4C4C4C",
      "2": "#1E1E1E",
      "3": "#1A1A1A",
      "4": "#121212",
      
      text: {
        primary: "#FFFFFF",
        secondary: "#BBBBBB",
      },
      
      contrast: {
        primary: "#FFFFFF",
      }
    },
  },
  typography: {
    fontFamily: '"Outfit", sans-serif'
  }
})

globalStyle('html, body', {
  margin: 0
})

globalStyle('*', {
  boxSizing: 'border-box',
  fontFamily: theme.typography.fontFamily
})