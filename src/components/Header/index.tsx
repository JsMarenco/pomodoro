import React from 'react'

import { AppBar, Box, IconButton, Stack, Toolbar } from '@mui/material'
import Image from 'next/image'
import logoLight from '@/assets/logo/logo_light.svg'
import ToggleTheme from '../Buttons/ToggleTheme'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'

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

          <Stack spacing={2} direction='row' alignItems='center' justifyContent='flex-end' >
            <ToggleTheme />

            <IconButton sx={{ color: 'primary.light' }}>
              <SettingsOutlinedIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
