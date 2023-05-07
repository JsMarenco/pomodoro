import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { pomodoroTimer } from '@/utils/basic/pomodoroTimer'

export type PomodoroStatus = 'Pause' | 'Focus' | 'Break' | 'Long break'

interface PomodoroTimerState {
  // Pomodoro State
  isPaused: boolean
  status: PomodoroStatus

  // Pomodoro Time
  minutes: number
  seconds: number
  currentInterval: number

  // Pomodoro User Settings
  userFocusTimeDuration: number
  userShortBreakDuration: number
  userLongBreakDuration: number
  userPomodoroIntervals: number
}

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
    startTimer(state) {
      state.isPaused = false
      state.status = 'Focus'
    },
    pauseTimer(state) {
      state.isPaused = true
      state.status = 'Pause'
    },
    resetTimer(state) {
      state.isPaused = true
      state.status = 'Pause'
      state.minutes = state.userFocusTimeDuration
      state.seconds = 0
    },

    updateFocusTimeDuration(state, action: PayloadAction<number>) {
      state.minutes = action.payload
      state.userFocusTimeDuration = action.payload
      state.seconds = 0
    },
    updateShortBreakDuration(state, action: PayloadAction<number>) {
      state.userShortBreakDuration = action.payload
    },
    updateLongBreakDuration(state, action: PayloadAction<number>) {
      state.userLongBreakDuration = action.payload
    },
    updatePomodoroIntervals(state, action: PayloadAction<number>) {
      state.userPomodoroIntervals = action.payload
    },

    resetSettings(state) {
      state.isPaused = true
      state.status = 'Pause'

      state.minutes = pomodoroTimer.focusTimer.defaultDuration
      state.seconds = 0

      state.userFocusTimeDuration = pomodoroTimer.focusTimer.defaultDuration
      state.userShortBreakDuration =
        pomodoroTimer.shortBreakTimer.defaultDuration
      state.userLongBreakDuration = pomodoroTimer.longBreakTimer.defaultDuration
      state.userPomodoroIntervals = pomodoroTimer.intervalTimer.defaultDuration
    },

    tick(state) {
      if (!state.isPaused) {
        if (state.seconds === 0) {
          if (state.minutes === 0) {
            // Timer reached 0
            // Handle logic for switching to the next interval
          } else {
            state.minutes -= 1
            state.seconds = 59
          }
        } else {
          state.seconds -= 1
        }
      }
    },
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

  tick,
} = pomodoroTimerSlice.actions

export default pomodoroTimerSlice.reducer
