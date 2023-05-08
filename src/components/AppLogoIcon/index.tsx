import React, { useContext } from 'react'

import appRoutes from '@/constants/routes/app'
import { AppThemeContext } from '@/context/AppThemeContext'
import { appThemes } from '@/themes'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import logoIconDarkVersion from '@/assets/icons/logo_icon_dark.svg'
import logoIconLightersion from '@/assets/icons/logo_icon_light.svg'

export default function AppLogoIcon() {
  const { currentThemeName } = useContext(AppThemeContext)
  const router = useRouter()

  return (
    <Box>
      <Box
        sx={{
          width: '30px',
          height: '30px',
          backgroundImage: `url(${
            currentThemeName === appThemes.light
              ? logoIconLightersion.src
              : logoIconDarkVersion.src
          })`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          backgroundSize: 'contain',
          mx: 'auto',
          cursor: 'pointer',
        }}
        onClick={() => router.push(appRoutes.home)}
      />
    </Box>
  )
}
