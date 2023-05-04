import { useCallback, useEffect, useState } from 'react'

import { Box, Zoom, Fab } from '@mui/material'
import { KeyboardArrowUp } from '@mui/icons-material'

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false)

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    // Button is displayed after scrolling for 100 pixels
    const handleScrollButtonVisiblity = () => {
      window.pageYOffset > 100 ? setShowButton(true) : setShowButton(false)
    }

    window.addEventListener('scroll', handleScrollButtonVisiblity)

    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisiblity)
    }
  }, [])

  return (
    <>
      {showButton && (
        <Zoom in={showButton} timeout={300}>
          <Box
            role="presentation"
            sx={{
              position: 'fixed',
              bottom: 32,
              right: 32,
              zIndex: 15,
            }}
          >
            <Fab
              onClick={scrollToTop}
              size="small"
              aria-label="scroll back to top"
              color="primary"
              sx={{ boxShadow: 7 }}
            >
              <KeyboardArrowUp />
            </Fab>
          </Box>
        </Zoom>
      )}
    </>
  )
}

export default ScrollTop
