import { CaseReducer } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/pomodoroTimerState.interface'

const tickReducer: CaseReducer<PomodoroTimerState> = (state) => {
  if (!state.isPaused) {
    if (state.seconds === 0) {
      if (state.minutes === 0) {
        // Timer reached 0
        // Handle logic for switching to the next intervalZZ
      } else {
        state.minutes -= 1
        state.seconds = 59
      }
    } else {
      state.seconds -= 1
    }
  }
}

export default tickReducer
