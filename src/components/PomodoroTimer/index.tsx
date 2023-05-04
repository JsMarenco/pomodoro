import React from 'react'

import { Button, IconButton, Stack, Typography, Tooltip } from '@mui/material'
import useCountdownTimer from '@/hooks/general/useCountdownTimer'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'
import StopOutlinedIcon from '@mui/icons-material/StopOutlined'
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined'

export default function PomodoroTimer() {
  const { minutes, seconds, start, isPaused, pause } = useCountdownTimer()

  return (
    <>
      <Typography
        variant="h1"
        color="text.primary"
        align="center"
        fontWeight={300}
        fontSize={150}
      >
        {`${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`}
      </Typography>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Tooltip title="Pause" arrow placement='top'>
          <IconButton onClick={pause} disabled={isPaused} size="small">
            <StopOutlinedIcon fontSize='large' color='primary' />
          </IconButton>
        </Tooltip>

        <Tooltip title="Play" arrow placement='top'>
          <IconButton onClick={start} disabled={!isPaused} size="small">
            <PlayArrowOutlinedIcon fontSize='large' color='primary' />
          </IconButton>
        </Tooltip>

        <Tooltip title="Next" arrow placement='top'>
          <IconButton size="small">
            <SkipNextOutlinedIcon fontSize='large' color='primary' />
          </IconButton>
        </Tooltip>
      </Stack>

      <Typography
        variant="h4"
        align="center"
        color="text.primary"
        fontWeight={300}
      >
        {`${'0'}/${'5'}`}
      </Typography>
    </>
  )
}
