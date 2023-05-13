import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/states/pomodoro'
import { saveInLocalStorage } from '@/utils/basic'
import preferenceKeys from '@/constants/preferenceKeys'

const updatePomodoroIntervalsReducer: CaseReducer<
  PomodoroTimerState,
  PayloadAction<number>
> = (state, action) => {
  const { userPreferenceKeys, roomPreferenceKeys } = preferenceKeys

  const preference = state.isRoom ? roomPreferenceKeys : userPreferenceKeys

  saveInLocalStorage(preference.intervalTimer.key, {
    value: action.payload,
  })

  return {
    ...state,
    pomodoroIntervals: action.payload,
  }
}

export default updatePomodoroIntervalsReducer
