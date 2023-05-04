import React from 'react'

import { AppBar, Box, Stack, Toolbar } from '@mui/material'
import Image from 'next/image'
import logoLight from '@/assets/logo/logo_light.svg'
import ToggleTheme from '../Buttons/ToggleTheme'

export default function Header() {
  return (
    <AppBar position="relative" color="primary">
      <Toolbar>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: '100%' }}
        >
          <Box>
            <Image src={logoLight.src} alt="" width={50} height={50} />
          </Box>

          <Stack>
            <ToggleTheme />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
