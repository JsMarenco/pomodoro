import { CaseReducer } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/states/pomodoro'
import { pomodoroTimer } from '@/utils/basic/pomodoroTimer'

const resetSettingsReducer: CaseReducer<PomodoroTimerState> = (state) => {
  state.isPaused = true
  state.status = 'Pause'

  state.minutes = pomodoroTimer.focusTimer.defaultDuration
  state.seconds = 0

  state.focusTimeDuration = pomodoroTimer.focusTimer.defaultDuration
  state.shortBreakDuration = pomodoroTimer.shortBreakTimer.defaultDuration
  state.longBreakDuration = pomodoroTimer.longBreakTimer.defaultDuration
  state.pomodoroIntervals = pomodoroTimer.intervalTimer.defaultDuration
}

export default resetSettingsReducer
