import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/pomodoroTimerState.interface'
import { saveInLocalStorage } from '@/utils/basic'
import preferenceKeys from '@/constants/preferenceKeys'

const updateFocusTimeDurationReducer: CaseReducer<
  PomodoroTimerState,
  PayloadAction<number>
> = (state, action) => {
  state.userFocusTimeDuration = action.payload
  state.seconds = 0

  saveInLocalStorage(preferenceKeys.focusTimer.key, { value: action.payload })
}

export default updateFocusTimeDurationReducer
