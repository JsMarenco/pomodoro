import { CaseReducer } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/states/pomodoro'

const tickReducer: CaseReducer<PomodoroTimerState> = (state) => {
  const { isPaused } = state

  if (isPaused) {
    return { ...state }
  }

  let newState = { ...state }

  if (newState.seconds === 0) {
    if (newState.minutes === 0) {
      if (newState.currentInterval < newState.pomodoroIntervals) {
        if (newState.status === 'Break') {
          newState.currentInterval = Math.min(
            newState.currentInterval + 1,
            newState.pomodoroIntervals
          )

          newState.minutes = newState.focusTimeDuration
        } else if (newState.status === 'Focus') {
          newState.minutes = newState.shortBreakDuration
        }

        newState.status = newState.status === 'Focus' ? 'Break' : 'Focus'
        newState.seconds = 0
      } else {
        newState.status = 'Long break'
        newState.minutes = newState.longBreakDuration
        newState.seconds = 0
      }
    } else {
      newState.minutes -= 1
      newState.seconds = 59
    }
  } else {
    newState.seconds -= 1
  }

  if (
    newState.status === 'Long break' &&
    newState.minutes === 0 &&
    newState.seconds === 0
  ) {
    newState.currentInterval = 1
    newState.minutes = newState.focusTimeDuration
    newState.seconds = 0
    newState.isPaused = true
  }

  return newState
}

export default tickReducer
