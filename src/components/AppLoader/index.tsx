import React, { useContext } from 'react'

import logoLightVersion from '@/assets/logo/logo_light.svg'
import logoDarkVersion from '@/assets/logo/logo_dark.svg'
import { Box, Grow, Typography } from '@mui/material'
import { AppThemeContext } from '@/context/AppThemeContext'
import { appThemes } from '@/themes'

export default function AppLoader() {
  const { currentThemeName } = useContext(AppThemeContext)

  return (
    <>
      <Grow in={true} timeout={200}>
        <Box>
          <Box
            sx={{
              width: '250px',
              height: '150px',
              backgroundImage: `url(${
                currentThemeName === appThemes.light
                  ? logoLightVersion.src
                  : logoDarkVersion.src
              })`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              display: 'flex',
              justifyContent: 'center',
              backgroundSize: 'contain',
              mx: 'auto',
            }}
          />

          <Typography
            variant="subtitle1"
            color="text.primary"
            align="center"
            fontWeight={500}
            fontSize={22}
            lineHeight={0.5}
          >
            Almost there...
          </Typography>
        </Box>
      </Grow>
    </>
  )
}
