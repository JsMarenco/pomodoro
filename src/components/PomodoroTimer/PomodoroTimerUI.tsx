import React from 'react'

import { Stack, Typography, IconButton, Box } from '@mui/material'
import { MoreOptionsMenu } from '../Menus/MoreOptions'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'
import PauseIcon from '@mui/icons-material/Pause'
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined'
import CoffeeMakerOutlinedIcon from '@mui/icons-material/CoffeeMakerOutlined'
import { PomodoroStatus } from '@/ts/interfaces/pomodoroTimerState.interface'

interface PomodoroTimerUIProps {
  status: PomodoroStatus
  isPaused: boolean

  minutes: number
  seconds: number

  openMoreOptions: boolean
  anchorElMoreOptions: null | HTMLElement
  handleCloseMoreOptions: () => void

  handleClick: (event: React.MouseEvent<HTMLElement>) => void
  handlePauseTimer: () => void
  handleStartTimer: () => void
  handleGoToNextInterval: () => void

  currentInterval: number
  userPomodoroIntervals: number
}

const iconWrapper = {
  borderRadius: 3,
  color: 'text.primary',
  transition: 'background-color 0.2s ease',
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
    currentInterval,
    userPomodoroIntervals,
    handleGoToNextInterval,
  } = props

  return (
    <Stack spacing={3}>
      <Stack
        sx={{
          borderRadius: 6,
          border: '1px solid',
          borderColor: 'text.primary',
          py: 1,
          width: '100%',
          maxWidth: '150px',
          mx: 'auto',
          bgcolor: isPaused ? 'primary.light' : 'secondary.light',
        }}
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        {status === 'Focus' ? (
          <PsychologyOutlinedIcon
            sx={{ color: 'text.primary' }}
            fontSize="small"
          />
        ) : (
          <CoffeeMakerOutlinedIcon
            sx={{ color: 'text.primary' }}
            fontSize="small"
          />
        )}

        <Typography variant="body1" color="text.primary">
          {status}
        </Typography>
      </Stack>

      <Typography
        variant="h3"
        color="text.primary"
        align="center"
        fontWeight={900}
        fontSize={150}
        lineHeight={0.7}
      >
        {minutes > 9 ? minutes : `0${minutes}`}
      </Typography>

      <Typography
        variant="h3"
        color="text.primary"
        align="center"
        fontWeight={900}
        fontSize={150}
        lineHeight={0.7}
      >
        {seconds > 9 ? seconds : `0${seconds}`}
      </Typography>

      <Typography
        variant="body1"
        color="text.primary"
        align="center"
        fontWeight={300}
      >
        {`${currentInterval} | ${userPomodoroIntervals}`}
      </Typography>

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
            disabled={isPaused || currentInterval === userPomodoroIntervals}
          >
            <SkipNextOutlinedIcon fontSize="large" />
          </IconButton>
        </Box>
      </Stack>
    </Stack>
  )
}
