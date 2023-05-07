import { CaseReducer } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/pomodoroTimerState.interface'

const tickReducer: CaseReducer<PomodoroTimerState> = (state) => {
  const {
    isPaused,
    seconds,
    minutes,
    currentInterval,
    userPomodoroIntervals,
    status,
    userFocusTimeDuration,
    userShortBreakDuration,
    userLongBreakDuration,
  } = state

  if (isPaused) {
    return
  }

  if (seconds === 0) {
    if (minutes === 0) {
      if (currentInterval < userPomodoroIntervals) {
        if (status === 'Break') {
          state.currentInterval = Math.min(
            currentInterval + 1,
            userPomodoroIntervals
          )
          state.minutes = userFocusTimeDuration
        } else if (status === 'Focus') {
          state.minutes = userShortBreakDuration
        }
        state.status = status === 'Focus' ? 'Break' : 'Focus'
        state.seconds = 0
      } else {
        state.status = 'Long break'
        state.minutes = userLongBreakDuration
        state.seconds = 0
      }
    } else {
      state.minutes -= 1
      state.seconds = 59
    }
  } else {
    state.seconds -= 1
  }
}

export default tickReducer
