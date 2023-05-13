import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/states/pomodoro'
import { saveInLocalStorage } from '@/utils/basic'
import preferenceKeys from '@/constants/preferenceKeys'

const updateFocusTimeDurationReducer: CaseReducer<
  PomodoroTimerState,
  PayloadAction<number>
> = (state, action) => {
  const { userPreferenceKeys, roomPreferenceKeys } = preferenceKeys

  const preference = state.isRoom ? roomPreferenceKeys : userPreferenceKeys

  saveInLocalStorage(preference.focusTimer.key, { value: action.payload })

  return {
    ...state,
    focusTimeDuration: action.payload,
    minutes: state.isPaused ? action.payload : state.minutes,
    seconds: state.isPaused ? 0 : state.seconds,
  }
}

export default updateFocusTimeDurationReducer
