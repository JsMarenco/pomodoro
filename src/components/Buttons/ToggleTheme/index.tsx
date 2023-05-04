import { useContext } from 'react'

import { IconButton } from '@mui/material'
import { AppThemeContext } from '@/context/AppThemeContext'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import { appThemes } from '@/themes'

const ToggleTheme = () => {
  const { handleChangeThemeApp, currentThemeName } = useContext(AppThemeContext)

  return (
    <IconButton sx={{ color: 'primary.light' }} onClick={handleChangeThemeApp}>
      {appThemes.light === currentThemeName ? (
        <LightModeOutlinedIcon />
      ) : (
        <DarkModeOutlinedIcon />
      )}
    </IconButton>
  )
}

export default ToggleTheme
