import { CaseReducer } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/states/pomodoro'

const resetTimerReducer: CaseReducer<PomodoroTimerState> = (state) => {
  state.isPaused = true
  state.status = 'Pause'
  state.minutes = state.focusTimeDuration
  state.seconds = 0
}

export default resetTimerReducer
