import { CaseReducer } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/pomodoroTimerState.interface'

const startTimerReducer: CaseReducer<PomodoroTimerState> = (state) => {
  state.isPaused = false
  state.status = 'Focus'
}

export default startTimerReducer
