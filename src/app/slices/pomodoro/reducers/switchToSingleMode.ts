import { CaseReducer } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/states/pomodoro'
import pomodoroUserInitialState from '@/utils/states/pomo/personal'

const switchToSingleModeReducer: CaseReducer<PomodoroTimerState> = (state) => {
  const singleState = pomodoroUserInitialState()

  return {
    ...state,
    ...singleState,
  }
}

export default switchToSingleModeReducer
