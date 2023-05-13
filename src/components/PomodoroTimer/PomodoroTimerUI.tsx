import React from 'react'

import { Stack, Typography } from '@mui/material'
import { PomodoroTimerUIProps } from '@/ts/interfaces/pomodoroTimerUI'
import PomodoroTimerControls from './PomodoroTimerControls'
import PomodoroTimerStatus from './PomodoroTimerStatus'
import PomodoroTimerDetails from './PomodoroTimerDetails'

export default function PomodoroTimerUI({
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
  pomodoroIntervals,
  handleGoToNextInterval,
  isRoom,
  roomParticipants,
  handleLeftRoom,
}: PomodoroTimerUIProps) {
  return (
    <Stack
      spacing={3}
      sx={{
        borderRadius: 3,
        py: 2,
        maxWidth: '700px',
        mx: 'auto',
        bgcolor: 'background.paper',
      }}
    >
      <PomodoroTimerStatus isPaused={isPaused} status={status} />

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

      <PomodoroTimerDetails
        currentInterval={currentInterval}
        pomodoroIntervals={pomodoroIntervals}
        roomParticipants={roomParticipants}
        isRoom={isRoom}
      />

      <PomodoroTimerControls
        openMoreOptions={openMoreOptions}
        anchorElMoreOptions={anchorElMoreOptions}
        handleCloseMoreOptions={handleCloseMoreOptions}
        isRoom={isRoom}
        isPaused={isPaused}
        handleClick={handleClick}
        handleStartTimer={handleStartTimer}
        handlePauseTimer={handlePauseTimer}
        handleGoToNextInterval={handleGoToNextInterval}
        handleLeftRoom={handleLeftRoom}
        pomodoroIntervals={pomodoroIntervals}
        currentInterval={currentInterval}
      />
    </Stack>
  )
}
