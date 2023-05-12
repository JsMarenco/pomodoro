import { CaseReducer } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/states/pomodoro'
import preferenceKeys from '@/constants/preferenceKeys'
import { saveInLocalStorage } from '@/utils/basic'

const switchToSilenceModeReducer: CaseReducer<PomodoroTimerState> = (state) => {
  const isSoundsActive = state.soundsEnabled

  const { userPreferenceKeys, roomPreferenceKeys } = preferenceKeys

  const preference = state.isRoom ? roomPreferenceKeys : userPreferenceKeys

  saveInLocalStorage(preference.enableSounds.key, { value: !isSoundsActive })

  return {
    ...state,
    soundsEnabled: !isSoundsActive,
  }
}

export default switchToSilenceModeReducer
