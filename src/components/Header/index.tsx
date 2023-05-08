import React from 'react'

import { AppBar, Toolbar } from '@mui/material'
import AppLogoIcon from '../AppLogoIcon'

export default function Header() {
  return (
    <AppBar
      position="relative"
      sx={{
        bgcolor: 'primary.light',
      }}
    >
      <Toolbar>
        <AppLogoIcon />
      </Toolbar>
    </AppBar>
  )
}
