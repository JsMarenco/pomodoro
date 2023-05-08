import { createSlice } from '@reduxjs/toolkit'
import { pomodoroTimer } from '@/utils/basic/pomodoroTimer'
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
import { PomodoroTimerState } from '@/ts/interfaces/pomodoroTimerState.interface'

const initialState: PomodoroTimerState = {
  // Pomodoro State
  isPaused: true,
  status: 'Pause',

  // Pomodoro Time
  minutes: pomodoroTimer.focusTimer.defaultDuration,
  seconds: 0,
  currentInterval: 1,

  // Pomodoro User Settings
  userFocusTimeDuration: pomodoroTimer.focusTimer.defaultDuration,
  userShortBreakDuration: pomodoroTimer.shortBreakTimer.defaultDuration,
  userLongBreakDuration: pomodoroTimer.longBreakTimer.defaultDuration,
  userPomodoroIntervals: pomodoroTimer.intervalTimer.defaultDuration,
}

const pomodoroTimerSlice = createSlice({
  name: 'pomodoroTimer',
  initialState,
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
