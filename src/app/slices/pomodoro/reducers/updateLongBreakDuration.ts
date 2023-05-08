import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/pomodoroTimerState.interface'
import { saveInLocalStorage } from '@/utils/basic'
import preferenceKeys from '@/constants/preferenceKeys'

const updateLongBreakDurationReducer: CaseReducer<
  PomodoroTimerState,
  PayloadAction<number>
> = (state, action) => {
  state.userLongBreakDuration = action.payload

  saveInLocalStorage(preferenceKeys.longBreakTimer.key, {
    value: action.payload,
  })
}

export default updateLongBreakDurationReducer
