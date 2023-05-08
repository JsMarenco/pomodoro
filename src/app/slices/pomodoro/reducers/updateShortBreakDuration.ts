import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/pomodoroTimerState.interface'
import preferenceKeys from '@/constants/preferenceKeys'
import { saveInLocalStorage } from '@/utils/basic'

const updateShortBreakDurationReducer: CaseReducer<
  PomodoroTimerState,
  PayloadAction<number>
> = (state, action) => {
  state.userShortBreakDuration = action.payload

  saveInLocalStorage(preferenceKeys.shortBreakTimer.key, {
    value: action.payload,
  })
}

export default updateShortBreakDurationReducer
