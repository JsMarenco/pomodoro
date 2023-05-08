import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/pomodoroTimerState.interface'
import { saveInLocalStorage } from '@/utils/basic'
import preferenceKeys from '@/constants/preferenceKeys'

const updatePomodoroIntervalsReducer: CaseReducer<
  PomodoroTimerState,
  PayloadAction<number>
> = (state, action) => {
  state.userPomodoroIntervals = action.payload

  saveInLocalStorage(preferenceKeys.intervalTimer.key, {
    value: action.payload,
  })
}

export default updatePomodoroIntervalsReducer
