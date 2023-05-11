import React from 'react'
import { PomodoroTimerUIProps } from '@/ts/interfaces/pomodoroTimerUI'
import GroupsIcon from '@mui/icons-material/Groups'
import { Stack, Typography } from '@mui/material'

type PomodoroTimerUIPropsSelected =
  | 'pomodoroIntervals'
  | 'currentInterval'
  | 'roomParticipants'
  | 'isRoom'
type PomodoroTimerDetailsProps = Pick<
  PomodoroTimerUIProps,
  PomodoroTimerUIPropsSelected
>

export default function PomodoroTimerDetails({
  currentInterval,
  pomodoroIntervals,
  roomParticipants,
  isRoom,
}: PomodoroTimerDetailsProps) {
  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Typography
        variant="body1"
        color="text.primary"
        align="center"
        fontWeight={300}
      >
        {`${currentInterval} | ${pomodoroIntervals}`}
      </Typography>

      {isRoom && (
        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <GroupsIcon fontSize="small" sx={{ color: 'text.primary' }} />

          <Typography
            variant="body1"
            color="text.primary"
            align="center"
            fontWeight={300}
          >
            {roomParticipants}
          </Typography>
        </Stack>
      )}
    </Stack>
  )
}
