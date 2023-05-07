import { createTheme } from '@mui/material'

/**
 * Dark theme
 */
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    common: {
      white: '#fff',
      black: '#000',
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
    text: {
      primary: '#F2F9FF',
      secondary: '#e5e5e5',
    },
    background: {
      paper: '#04090D',
      default: '#04090D',
    },
    divider: '#fca311',
  },
  typography: {
    button: {
      textTransform: 'initial',
    },
  },
})

export default darkTheme
