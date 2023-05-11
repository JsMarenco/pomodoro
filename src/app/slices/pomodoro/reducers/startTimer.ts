import { CaseReducer } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/states/pomodoro'

const startTimerReducer: CaseReducer<PomodoroTimerState> = (state) => {
  state.isPaused = false
  state.status = 'Focus'
}

export default startTimerReducer
