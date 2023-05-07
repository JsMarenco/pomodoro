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
      main: 'rgba(76, 172, 255, .62)',
      light: 'rgba(76, 172, 255, .15)',
      dark: '#9f4600',
      contrastText: '#ffffff',
    },
    secondary: {
      main: 'rgba(255, 76, 76, .71)',
      light: 'rgba(255, 76, 76, .15)',
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
      primary: '#153047',
      secondary: '#5c5a5a',
    },
    background: {
      paper: '#FFF2F2',
      default: '#F2F9FF',
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
