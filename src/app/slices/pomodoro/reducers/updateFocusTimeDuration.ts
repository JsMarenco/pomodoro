import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/pomodoroTimerState.interface'

const updateFocusTimeDurationReducer: CaseReducer<
  PomodoroTimerState,
  PayloadAction<number>
> = (state, action) => {
  state.userFocusTimeDuration = action.payload
  state.seconds = 0
}

export default updateFocusTimeDurationReducer
