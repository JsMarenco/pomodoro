import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/states/pomodoro'
import preferenceKeys from '@/constants/preferenceKeys'
import { saveInLocalStorage } from '@/utils/basic'

const updateShortBreakDurationReducer: CaseReducer<
  PomodoroTimerState,
  PayloadAction<number>
> = (state, action) => {
  const { userPreferenceKeys, roomPreferenceKeys } = preferenceKeys

  const preference = state.isRoom ? roomPreferenceKeys : userPreferenceKeys

  saveInLocalStorage(preference.shortBreakTimer.key, {
    value: action.payload,
  })

  return {
    ...state,
    shortBreakDuration: action.payload,
    minutes: state.isPaused ? action.payload : state.minutes,
    seconds: state.isPaused ? 0 : state.seconds,
  }
}

export default updateShortBreakDurationReducer
