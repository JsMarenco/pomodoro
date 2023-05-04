import { createTheme } from '@mui/material'

/**
 * Light theme
 */
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    common: {
      white: '#ffffff',
      black: '#161a1d',
    },
    primary: {
      main: '#2C0E37',
      light: '#90e0ef',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#D35400',
      dark: '#9f4600',
      contrastText: '#ffffff',
    },
    error: {
      main: '#FF0000',
      contrastText: '#ffffff',
    },
    success: {
      main: '#00FF00',
      contrastText: '#ffffff',
    },
    info: {
      main: '#2980b9',
      contrastText: '#ffffff',
    },
    text: {
      primary: '#161a1d',
      secondary: '#5c5a5a',
    },
    background: {
      paper: '#ffffff',
      default: '#ededed',
    },
    divider: '#5c5a5a',
  },
  typography: {
    button: {
      textTransform: 'initial',
    },
  },
})

export default lightTheme
