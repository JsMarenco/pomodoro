import { createContext, useEffect, useState } from 'react'

// Third-party dependencies
import { ThemeProvider } from '@mui/material'

// Current project dependencies
import { appThemes, darkTheme, lightTheme } from '@/themes'
import { IATC, ICCP } from '@/ts/interfaces/context'
import { getFromLocalStorage, saveInLocalStorage } from '@/utils/basic'
import preferenceKeys from '@/constants/preferenceKeys'
import { useSelector } from 'react-redux'
import { RootState } from '@/app'

export const AppThemeContext = createContext<IATC>({} as IATC)

export const AppThemeContextProvider = (props: ICCP) => {
  const [currentThemeName, setCurrentThemeName] = useState(appThemes.light)
  const [currentTheme, setCurrentTheme] = useState(lightTheme)
  const { backgroundPhoto, isRoom } = useSelector(
    (state: RootState) => state.personalPomodoro
  )

  const setBackgroundFromLocalStorage = () => {
    const { userPreferenceKeys, roomPreferenceKeys } = preferenceKeys

    let url: string = isRoom
      ? getFromLocalStorage(roomPreferenceKeys.backgroundPhoto.key)?.value
      : getFromLocalStorage(userPreferenceKeys.backgroundPhoto.key)?.value

    if (url) {
      document.body.style.backgroundImage = `url(${url})`
      document.body.style.backgroundPosition = 'center'
      document.body.style.backgroundSize = 'cover'
    }
  }

  const handleChangeBgImage = (url: string) => {
    document.body.style.backgroundImage = `url(${url})`
    document.body.style.backgroundPosition = 'center'
    document.body.style.backgroundSize = 'cover'
  }

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

    const value =
      currentThemeName === appThemes.dark ? appThemes.light : appThemes.dark

    saveInLocalStorage(preferenceKeys.theme.key, { value })
  }

  useEffect(() => {
    console.log(
      '🚀 ~ file: AppThemeContext.tsx:64 ~ useEffect ~ backgroundPhoto:',
      backgroundPhoto
    )
    if (!backgroundPhoto) {
      // chnage the page background
      document.body.style.backgroundColor =
        currentTheme.palette.background.default
      document.body.style.backgroundImage = ''
    }

    const themeClass =
      currentThemeName === appThemes.dark ? appThemes.dark : appThemes.light

    // add or remove the dark class
    document.body.setAttribute('class', themeClass)
  }, [backgroundPhoto, currentTheme, currentThemeName])

  useEffect(() => {
    // Check if a default theme exists in localStorage
    const storedTheme = getFromLocalStorage(preferenceKeys.theme.key)

    if (storedTheme && storedTheme.value) {
      setCurrentThemeName(storedTheme.value)
      setCurrentTheme(
        storedTheme.value === appThemes.dark ? darkTheme : lightTheme
      )
    } else {
      // Detect user mode
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
    }

    // Get the background image from local storage
    setBackgroundFromLocalStorage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AppThemeContext.Provider
      value={{
        currentThemeName,
        handleChangeThemeApp,
        handleChangeBgImage,
      }}
    >
      <ThemeProvider theme={currentTheme}>{props.children}</ThemeProvider>
    </AppThemeContext.Provider>
  )
}
