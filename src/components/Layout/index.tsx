import { FC, ReactNode } from 'react'

import { Box, Container } from '@mui/material'
import ScrollTop from '../Buttons/ScrollTop'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        position: 'relative',
      }}
    >
      <Box sx={{ flexGrow: 1 }} className="flex items-center">
        <Container maxWidth="lg" sx={{ my: 2 }}>
          {children}
        </Container>
      </Box>

      <ScrollTop />
    </Box>
  )
}

export default Layout
