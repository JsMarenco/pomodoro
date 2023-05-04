import { FC, ReactNode } from 'react'

import { Box, Container } from '@mui/material'
// import Footer from '../Footer'
import Header from '../Header'
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
      <Header />

      <Box sx={{ flexGrow: 1 }} className="flex items-center">
        <Container maxWidth="lg" sx={{ my: 2 }}>
          {children}
        </Container>
      </Box>

      <ScrollTop />

      {/* <Footer /> */}
    </Box>
  )
}

export default Layout
