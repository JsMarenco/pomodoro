import { CaseReducer } from '@reduxjs/toolkit'
import {
  PomodoroStatus,
  PomodoroTimerState,
} from '@/ts/interfaces/states/pomodoro'

const startTimerReducer: CaseReducer<PomodoroTimerState> = (state) => {
  let newStatus: PomodoroStatus = 'Focus'
  const isLongBreak = state.status === 'Long break'
  const isBreak = state.status === 'Break'

  if (isBreak || isLongBreak) {
    newStatus = state.status
  }

  return {
    ...state,
    isPaused: false,
    status: newStatus,
  }
}

export default startTimerReducer
