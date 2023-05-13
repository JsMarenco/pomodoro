import { CaseReducer } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/states/pomodoro'

const pauseTimerReducer: CaseReducer<PomodoroTimerState> = (state) => {
  return {
    ...state,
    isPaused: true,
  }
}

export default pauseTimerReducer
