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
import pomodoroUserInitialState from '@/utils/states/pomo/personal'
import createRoomReducer from './reducers/createRoom'
import switchToRoomModeReducer from './reducers/switchToRoomMode'
import switchToSingleModeReducer from './reducers/switchToSingleMode'
import updateRoomHostReducer from './reducers/updateRoomHost'
import switchToSilenceModeReducer from './reducers/switchToSilenceMode'

const pomodoroTimerSlice = createSlice({
  name: 'pomodoroTimer',
  initialState: pomodoroUserInitialState(),
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
    createRoom: createRoomReducer,
    switchToRoomMode: switchToRoomModeReducer,
    switchToSingleMode: switchToSingleModeReducer,
    updateRoomHost: updateRoomHostReducer,
    switchToSilenceMode: switchToSilenceModeReducer,
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
  switchToRoomMode,
  switchToSingleMode,
  createRoom,
  updateRoomHost,
  switchToSilenceMode,
} = pomodoroTimerSlice.actions

export default pomodoroTimerSlice.reducer
