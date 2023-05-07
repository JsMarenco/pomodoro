import { CaseReducer } from '@reduxjs/toolkit'
import { PomodoroTimerState } from '@/ts/interfaces/pomodoroTimerState.interface'
import { pomodoroTimer } from '@/utils/basic/pomodoroTimer'

const resetSettingsReducer: CaseReducer<PomodoroTimerState> = (state) => {
  state.isPaused = true
  state.status = 'Pause'

  state.minutes = pomodoroTimer.focusTimer.defaultDuration
  state.seconds = 0

  state.userFocusTimeDuration = pomodoroTimer.focusTimer.defaultDuration
  state.userShortBreakDuration = pomodoroTimer.shortBreakTimer.defaultDuration
  state.userLongBreakDuration = pomodoroTimer.longBreakTimer.defaultDuration
  state.userPomodoroIntervals = pomodoroTimer.intervalTimer.defaultDuration
}

export default resetSettingsReducer
