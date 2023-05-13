import { CaseReducer } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/states/pomodoro'
import { pomodoroTimer } from '@/utils/basic/pomodoroTimer'

const resetSettingsReducer: CaseReducer<PomodoroTimerState> = (state) => {
  return {
    ...state,
    isPaused: true,
    minutes: pomodoroTimer.focusTimer.defaultDuration,
    seconds: 0,
    focusTimeDuration: pomodoroTimer.focusTimer.defaultDuration,
    shortBreakDuration: pomodoroTimer.shortBreakTimer.defaultDuration,
    longBreakDuration: pomodoroTimer.longBreakTimer.defaultDuration,
    pomodoroIntervals: pomodoroTimer.intervalTimer.defaultDuration,
  }
}

export default resetSettingsReducer
