import { PomodoroTimerState } from '@/ts/interfaces/states/pomodoro'
import { CaseReducer } from '@reduxjs/toolkit'

const goToNextIntervalReducer: CaseReducer<PomodoroTimerState> = (state) => {
  let newState = { ...state }

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

    newState.seconds = 0
    newState.status = newState.status === 'Focus' ? 'Break' : 'Focus'
  } else {
    newState.status = 'Long break'
    newState.minutes = newState.longBreakDuration
    newState.seconds = 0
  }

  return newState
}

export default goToNextIntervalReducer
