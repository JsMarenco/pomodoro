import { CaseReducer } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/states/pomodoro'

const tickReducer: CaseReducer<PomodoroTimerState> = (state) => {
  const {
    isPaused,
    seconds,
    minutes,
    currentInterval,
    pomodoroIntervals,
    status,
    focusTimeDuration,
    shortBreakDuration,
    longBreakDuration,
  } = state

  if (isPaused) {
    return
  }

  if (seconds === 0) {
    if (minutes === 0) {
      if (currentInterval < pomodoroIntervals) {
        if (status === 'Break') {
          state.currentInterval = Math.min(
            currentInterval + 1,
            pomodoroIntervals
          )

          state.minutes = focusTimeDuration
        } else if (status === 'Focus') {
          state.minutes = shortBreakDuration
        }

        state.status = status === 'Focus' ? 'Break' : 'Focus'
        state.seconds = 0
      } else {
        state.status = 'Long break'
        state.minutes = longBreakDuration
        state.seconds = 0
      }
    } else {
      state.minutes -= 1
      state.seconds = 59
    }
  } else {
    state.seconds -= 1
  }

  if (
    state.status === 'Long break' &&
    state.minutes === 0 &&
    state.seconds === 0
  ) {
    state.currentInterval = 1
    state.status = 'Pause'
    state.minutes = focusTimeDuration
    state.seconds = 0
    state.isPaused = true
  }
}

export default tickReducer
