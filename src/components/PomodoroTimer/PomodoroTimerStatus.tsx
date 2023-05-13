import React from 'react'
import { PomodoroTimerUIProps } from '@/ts/interfaces/pomodoroTimerUI'
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined'
import CoffeeMakerOutlinedIcon from '@mui/icons-material/CoffeeMakerOutlined'
import { Stack, Typography } from '@mui/material'

type PomodoroTimerUIPropsSelected = 'isPaused' | 'status'
type PomodoroTimerStatusProps = Pick<
  PomodoroTimerUIProps,
  PomodoroTimerUIPropsSelected
>

export default function PomodoroTimerStatus({
  isPaused,
  status,
}: PomodoroTimerStatusProps) {
  return (
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
  )
}
