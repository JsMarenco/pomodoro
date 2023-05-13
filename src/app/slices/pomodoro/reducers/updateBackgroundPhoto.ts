import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/states/pomodoro'
import preferenceKeys from '@/constants/preferenceKeys'
import { saveInLocalStorage } from '@/utils/basic'

const updateBackgroundPhotoReducer: CaseReducer<
  PomodoroTimerState,
  PayloadAction<string>
> = (state, action) => {
  const { userPreferenceKeys, roomPreferenceKeys } = preferenceKeys

  const preference = state.isRoom ? roomPreferenceKeys : userPreferenceKeys

  if (!action.payload.trim()) {
    localStorage.removeItem(preference.backgroundPhoto.key)

    return {
      ...state,
      backgroundPhoto: action.payload.trim(),
    }
  }

  saveInLocalStorage(preference.backgroundPhoto.key, {
    value: action.payload,
  })

  return {
    ...state,
    backgroundPhoto: action.payload.trim(),
  }
}

export default updateBackgroundPhotoReducer
