import { PomodoroTimerState } from '@/ts/interfaces/states/pomodoro'
import { CaseReducer } from '@reduxjs/toolkit'

const goToNextIntervalReducer: CaseReducer<PomodoroTimerState> = (state) => {
  if (state.currentInterval < state.pomodoroIntervals) {
    if (state.status === 'Break') {
      // Increment the current interval by 1, ensuring it doesn't exceed the maximum number of pomodoro intervals
      state.currentInterval = Math.min(
        state.currentInterval + 1,
        state.pomodoroIntervals
      )
      state.minutes = state.focusTimeDuration
    } else if (state.status === 'Focus') {
      state.minutes = state.shortBreakDuration
    }

    state.seconds = 0
    state.status = state.status === 'Focus' ? 'Break' : 'Focus'
  } else {
    state.status = 'Long break'
    state.minutes = state.longBreakDuration
    state.seconds = 0
  }
}

export default goToNextIntervalReducer
