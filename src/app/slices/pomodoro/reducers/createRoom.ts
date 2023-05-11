import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { PomodoroTimerState, Room } from '@/ts/interfaces/states/pomodoro'

const createRoomReducer: CaseReducer<
  PomodoroTimerState,
  PayloadAction<Room>
> = (state, action) => {
  return {
    ...state,
    ...action.payload,
  }
}

export default createRoomReducer
