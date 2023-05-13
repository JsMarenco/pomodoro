import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/states/pomodoro'
import { saveInLocalStorage } from '@/utils/basic'
import preferenceKeys from '@/constants/preferenceKeys'

const updateLongBreakDurationReducer: CaseReducer<
  PomodoroTimerState,
  PayloadAction<number>
> = (state, action) => {
  const { userPreferenceKeys, roomPreferenceKeys } = preferenceKeys

  const preference = state.isRoom ? roomPreferenceKeys : userPreferenceKeys

  saveInLocalStorage(preference.longBreakTimer.key, {
    value: action.payload,
  })

  return {
    ...state,
    longBreakDuration: action.payload,
  }
}

export default updateLongBreakDurationReducer
