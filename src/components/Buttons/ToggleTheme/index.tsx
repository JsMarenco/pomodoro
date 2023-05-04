import { useContext } from 'react'

import { IconButton, Tooltip } from '@mui/material'
import { AppThemeContext } from '@/context/AppThemeContext'
import Image from 'next/image'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import { appThemes } from '@/themes'

const ToggleTheme = () => {
  const { handleChangeThemeApp, currentThemeName } = useContext(AppThemeContext)

  return (
    <Tooltip title="Toggle theme" arrow onClick={handleChangeThemeApp}>
      <IconButton sx={{ color: 'primary.light' }}>
        {appThemes.light === currentThemeName ? (
          <LightModeOutlinedIcon />
        ) : (
          <DarkModeOutlinedIcon />
        )}
      </IconButton>
    </Tooltip>
  )
}

export default ToggleTheme
