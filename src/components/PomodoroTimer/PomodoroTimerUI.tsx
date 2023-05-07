import React from 'react'

import { Stack, Typography, Tooltip, IconButton } from '@mui/material'
import { MoreOptionsMenu } from '../Menus/MoreOptions'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'
import PauseIcon from '@mui/icons-material/Pause'
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'

interface PomodoroTimerUIProps {
  status: string
  isPaused: boolean

  minutes: number
  seconds: number

  openMoreOptions: boolean
  anchorElMoreOptions: null | HTMLElement
  handleCloseMoreOptions: () => void

  handleClick: (event: React.MouseEvent<HTMLElement>) => void
  handlePauseTimer: () => void
  handleStartTimer: () => void
}

const iconStyles = {
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'text.primary',
  color: 'text.primary',
}

export default function PomodoroTimerUI(props: PomodoroTimerUIProps) {
  const {
    status,
    minutes,
    seconds,
    openMoreOptions,
    anchorElMoreOptions,
    handleCloseMoreOptions,
    handleClick,
    handlePauseTimer,
    handleStartTimer,
    isPaused,
  } = props

  return (
    <Stack>
      <Typography
        variant="h6"
        color="text.primary"
        align="center"
        sx={{
          borderRadius: 6,
          border: '1px solid',
          borderColor: 'text.primary',
          p: 1.5,
          py: 0.2,
          mb: 2,
          maxWidth: '150px',
          mx: 'auto',
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
        >
          <Tooltip title="More options" arrow placement="top">
            <IconButton size="small" onClick={handleClick} sx={iconStyles}>
              <MoreHorizOutlinedIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </MoreOptionsMenu>

        {isPaused && (
          <Tooltip title="Play" arrow placement="top">
            <IconButton onClick={handleStartTimer} size="small" sx={iconStyles}>
              <PlayArrowOutlinedIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        )}

        {!isPaused && (
          <Tooltip title="Pause" arrow placement="top">
            <IconButton onClick={handlePauseTimer} size="small" sx={iconStyles}>
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
    </Stack>
  )
}
