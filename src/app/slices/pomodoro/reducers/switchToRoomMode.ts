import { CaseReducer } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/states/pomodoro'
import pomodoroRoomInitialState from '@/utils/states/pomo/room'

const switchToRoomModeReducer: CaseReducer<PomodoroTimerState> = (state) => {
  const roomState = pomodoroRoomInitialState()

  return {
    ...state,
    ...roomState,
  }
}

export default switchToRoomModeReducer
