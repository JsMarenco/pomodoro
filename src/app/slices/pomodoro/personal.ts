import { createSlice } from '@reduxjs/toolkit'
import startTimerReducer from './reducers/startTimer'
import pauseTimerReducer from './reducers/pauseTimer'
import resetTimerReducer from './reducers/resetTimer'
import goToNextIntervalReducer from './reducers/goToNextInterval'
import updateFocusTimeDurationReducer from './reducers/updateFocusTimeDuration'
import updateShortBreakDurationReducer from './reducers/updateShortBreakDuration'
import updateLongBreakDurationReducer from './reducers/updateLongBreakDuration'
import updatePomodoroIntervalsReducer from './reducers/updatePomodoroIntervals'
import resetSettingsReducer from './reducers/resetSettings'
import tickReducer from './reducers/tick'
import pomodoroTimerInitialState from '@/utils/states/pomodoroTimer'

const pomodoroTimerSlice = createSlice({
  name: 'pomodoroTimer',
  initialState: pomodoroTimerInitialState,
  reducers: {
    startTimer: startTimerReducer,
    pauseTimer: pauseTimerReducer,
    resetTimer: resetTimerReducer,
    goToNextInterval: goToNextIntervalReducer,
    updateFocusTimeDuration: updateFocusTimeDurationReducer,
    updateShortBreakDuration: updateShortBreakDurationReducer,
    updateLongBreakDuration: updateLongBreakDurationReducer,
    updatePomodoroIntervals: updatePomodoroIntervalsReducer,
    resetSettings: resetSettingsReducer,
    tick: tickReducer,
  },
})

export const {
  startTimer,
  pauseTimer,
  resetTimer,
  updateFocusTimeDuration,
  updateShortBreakDuration,
  updateLongBreakDuration,
  updatePomodoroIntervals,
  goToNextInterval,
  tick,
} = pomodoroTimerSlice.actions

export default pomodoroTimerSlice.reducer
