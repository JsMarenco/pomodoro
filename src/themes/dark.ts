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
      main: '#ffffff',
    },
    text: {
      primary: '#ffffff',
      secondary: '#e5e5e5',
    },
    background: {
      paper: '#14213d',
      default: '#000000',
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
