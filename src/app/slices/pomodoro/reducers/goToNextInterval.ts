import { CaseReducer } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/pomodoroTimerState.interface'

const goToNextIntervalReducer: CaseReducer<PomodoroTimerState> = (state) => {
  if (state.currentInterval < state.userPomodoroIntervals) {
    if (state.status === 'Break') {
      // Increment the current interval by 1, ensuring it doesn't exceed the maximum number of pomodoro intervals
      state.currentInterval = Math.min(
        state.currentInterval + 1,
        state.userPomodoroIntervals
      )
      state.minutes = state.userFocusTimeDuration
    } else if (state.status === 'Focus') {
      state.minutes = state.userShortBreakDuration
    }

    state.seconds = 0
    state.status = state.status === 'Focus' ? 'Break' : 'Focus'
  } else {
    state.status = 'Long break'
    state.minutes = state.userLongBreakDuration
    state.seconds = 0
  }
}

export default goToNextIntervalReducer
