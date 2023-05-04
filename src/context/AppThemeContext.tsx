import { createContext, useEffect, useState } from 'react'

// Third-party dependencies
import { ThemeProvider } from '@mui/material'

// Current project dependencies
import { appThemes, darkTheme, lightTheme } from '@/themes'
import { IATC, ICCP } from '@/ts/interfaces/context'

/**
 * Theme Context
 */
export const AppThemeContext = createContext<IATC>({} as IATC)

/**
 * Mui Theme
 * @param props React Node
 * @returns Mui Theme Context
 */
export const AppThemeContextProvider = (props: ICCP) => {
  const [currentThemeName, setCurrentThemeName] = useState(appThemes.light)
  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  /**
   * Change the app theme
   * @default Light theme
   */
  const handleChangeThemeApp = () => {
    setCurrentThemeName(
      currentThemeName === appThemes.dark ? appThemes.light : appThemes.dark
    )

    setCurrentTheme(
      currentThemeName === appThemes.dark ? lightTheme : darkTheme
    )
  }

  useEffect(() => {
    // chnage the page background
    document.body.style.backgroundColor =
      currentTheme.palette.background.default

    const themeClass =
      currentThemeName === appThemes.dark ? appThemes.dark : appThemes.light

    // add or remove the dark class
    document.body.setAttribute('class', themeClass)
  }, [currentTheme, currentThemeName])

  // detect user mode
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    setCurrentThemeName(mediaQuery.matches ? appThemes.light : appThemes.dark)

    setCurrentTheme(mediaQuery.matches ? lightTheme : darkTheme)

    const handleChange = (event: MediaQueryListEvent) => {
      setCurrentThemeName(event.matches ? appThemes.light : appThemes.dark)
      setCurrentTheme(event.matches ? lightTheme : darkTheme)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return (
    <AppThemeContext.Provider
      value={{
        currentThemeName,
        handleChangeThemeApp,
      }}
    >
      <ThemeProvider theme={currentTheme}>{props.children}</ThemeProvider>
    </AppThemeContext.Provider>
  )
}
