import { CaseReducer } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/pomodoroTimerState.interface'

const resetTimerReducer: CaseReducer<PomodoroTimerState> = (state) => {
  state.isPaused = true
  state.status = 'Pause'
  state.minutes = state.userFocusTimeDuration
  state.seconds = 0
}

export default resetTimerReducer
