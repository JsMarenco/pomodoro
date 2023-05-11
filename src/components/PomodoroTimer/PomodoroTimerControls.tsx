import React from 'react'

import { Stack, Box, IconButton } from '@mui/material'
import { MoreOptionsMenu } from '../Menus/MoreOptions'
import { PomodoroTimerUIProps } from '@/ts/interfaces/pomodoroTimerUI'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'
import PauseIcon from '@mui/icons-material/Pause'
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import LogoutIcon from '@mui/icons-material/Logout'

type PomodoroTimerUIPropsSelected =
  | 'openMoreOptions'
  | 'anchorElMoreOptions'
  | 'handleCloseMoreOptions'
  | 'isRoom'
  | 'isPaused'
  | 'handleClick'
  | 'handleStartTimer'
  | 'handlePauseTimer'
  | 'handleGoToNextInterval'
  | 'handleLeftRoom'
  | 'currentInterval'
  | 'pomodoroIntervals'

type PomodoroTimerControlsProps = Pick<
  PomodoroTimerUIProps,
  PomodoroTimerUIPropsSelected
>

const iconWrapper = {
  borderRadius: 3,
  color: 'text.primary',
  transition: 'background-color 0.2s ease',
}

export default function PomodoroTimerControls({
  openMoreOptions,
  anchorElMoreOptions,
  handleCloseMoreOptions,
  isRoom,
  isPaused,
  handleClick,
  handleStartTimer,
  handlePauseTimer,
  handleGoToNextInterval,
  handleLeftRoom,
  pomodoroIntervals,
  currentInterval,
}: PomodoroTimerControlsProps) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={2}
    >
      <MoreOptionsMenu
        isOpen={openMoreOptions}
        anchorElMoreOptions={anchorElMoreOptions}
        handleClose={handleCloseMoreOptions}
        isRoom={isRoom}
      >
        <Box
          sx={{
            ...iconWrapper,
            bgcolor: isPaused ? 'primary.light' : 'secondary.light',
          }}
        >
          <IconButton size="small" onClick={handleClick} disableRipple>
            <MoreHorizOutlinedIcon fontSize="large" />
          </IconButton>
        </Box>
      </MoreOptionsMenu>

      <Box
        sx={{
          ...iconWrapper,
          bgcolor: isPaused ? 'primary.main' : 'secondary.main',
          backgroundImage: 'none',
        }}
      >
        {isPaused && (
          <IconButton
            onClick={handleStartTimer}
            size="small"
            sx={{ p: 1.5 }}
            disableFocusRipple
            disableRipple
          >
            <PlayArrowOutlinedIcon fontSize="large" />
          </IconButton>
        )}

        {!isPaused && (
          <IconButton
            onClick={handlePauseTimer}
            size="small"
            sx={{ p: 1.5 }}
            disableFocusRipple
            disableRipple
          >
            <PauseIcon fontSize="large" />
          </IconButton>
        )}
      </Box>

      {!isRoom && (
        <Box
          sx={{
            ...iconWrapper,
            bgcolor: isPaused ? 'primary.light' : 'secondary.light',
          }}
        >
          <IconButton
            size="small"
            disableRipple
            onClick={handleGoToNextInterval}
            disabled={isPaused || currentInterval === pomodoroIntervals}
          >
            <SkipNextOutlinedIcon fontSize="large" />
          </IconButton>
        </Box>
      )}

      {isRoom && (
        <Box
          sx={{
            ...iconWrapper,
            bgcolor: isPaused ? 'primary.light' : 'secondary.light',
          }}
        >
          <IconButton size="small" disableRipple onClick={handleLeftRoom}>
            <LogoutIcon fontSize="large" />
          </IconButton>
        </Box>
      )}
    </Stack>
  )
}
