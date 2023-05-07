import { useState } from 'react'

import {
  IconButton,
  Stack,
  Typography,
  Tooltip,
} from '@mui/material'
import useCountdownTimer from '@/hooks/general/usePomodoroTimer'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'
import PauseIcon from '@mui/icons-material/Pause'
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import { MoreOptionsMenu } from '../Menus/MoreOptions'

const iconStyles = {
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'text.primary',
  color: 'text.primary',
}

export default function PomodoroTimer() {
  const { minutes, seconds, startTimer, isPaused, pauseTimer, status, updateMinutes } = useCountdownTimer()

  const [anchorElMoreOptions, setAnchorElMoreOptions] =
    useState<null | HTMLElement>(null)
  const openMoreOptions = Boolean(anchorElMoreOptions)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMoreOptions(event.currentTarget)
  }

  const handleCloseMoreOptions = () => {
    setAnchorElMoreOptions(null)
  }

  return (
    <>
      <Typography
        variant="h6"
        color="text.primary"
        align="center"
        sx={{
          borderRadius: 6,
          border: '1px solid',
          borderColor: 'text.primary',
          p: .5,
          py: .2,
          mb: 2,
          maxWidth: '150px',
          mx: 'auto'
        }}
      >
        {status}
      </Typography>

      <Typography
        variant="h3"
        color="text.primary"
        align="center"
        fontWeight={900}
        fontSize={150}
        lineHeight={0.8}
      >
        {minutes > 9 ? minutes : `0${minutes}`}
      </Typography>

      <Typography
        variant="h3"
        color="text.primary"
        align="center"
        fontWeight={900}
        fontSize={150}
        lineHeight={0.8}
      >
        {seconds > 9 ? seconds : `0${seconds}`}
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ mt: 2 }}
      >
        <MoreOptionsMenu
          openMoreOptions={openMoreOptions}
          anchorElMoreOptions={anchorElMoreOptions}
          handleCloseMoreOptions={handleCloseMoreOptions}
          updateMinutes={updateMinutes}
        >
          <Tooltip title="More options" arrow placement="top">
            <IconButton size="small" onClick={handleClick} sx={iconStyles}>
              <MoreHorizOutlinedIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </MoreOptionsMenu>

        {isPaused && (
          <Tooltip title="Play" arrow placement="top">
            <IconButton onClick={startTimer} size="small" sx={iconStyles}>
              <PlayArrowOutlinedIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        )}

        {!isPaused && (
          <Tooltip title="Pause" arrow placement="top">
            <IconButton onClick={pauseTimer} size="small" sx={iconStyles}>
              <PauseIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        )}

        <Tooltip title="Next" arrow placement="top">
          <IconButton size="small" sx={iconStyles}>
            <SkipNextOutlinedIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Stack>

      {/* <Typography
        variant="h4"
        align="center"
        color="text.primary"
        fontWeight={300}
      >
        {`${'0'}/${'5'}`}
      </Typography> */}
    </>
  )
}
