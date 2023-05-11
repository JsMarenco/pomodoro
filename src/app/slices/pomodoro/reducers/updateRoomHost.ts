import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/states/pomodoro'

const updateRoomHostReducer: CaseReducer<
  PomodoroTimerState,
  PayloadAction<PomodoroTimerState['host']>
> = (state, action) => {
  state.host = action.payload
}

export default updateRoomHostReducer
