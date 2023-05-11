import { CaseReducer } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/states/pomodoro'

const pauseTimerReducer: CaseReducer<PomodoroTimerState> = (state) => {
  state.isPaused = true
  state.status = 'Pause'
}

export default pauseTimerReducer
