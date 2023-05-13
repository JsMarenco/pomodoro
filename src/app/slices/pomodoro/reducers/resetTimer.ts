import { CaseReducer } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/states/pomodoro'

const resetTimerReducer: CaseReducer<PomodoroTimerState> = (state) => {
  return {
    ...state,
    isPaused: true,
    status: 'Focus',
    minutes: state.focusTimeDuration,
    seconds: 0,
  }
}

export default resetTimerReducer
