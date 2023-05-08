import { PomodoroTimerState } from '@/ts/interfaces/pomodoroTimerState.interface'
import { pomodoroTimer } from '../basic/pomodoroTimer'
import { getFromLocalStorage } from '../basic'
import preferenceKeys from '@/constants/preferenceKeys'

const pomodoroTimerInitialState: PomodoroTimerState = {
  // Pomodoro State
  isPaused: true,
  status: 'Pause',

  // Pomodoro Time
  minutes:
    getFromLocalStorage(preferenceKeys.focusTimer.key)?.value ||
    pomodoroTimer.focusTimer.defaultDuration,

  seconds: 0,
  currentInterval: 1,

  // Pomodoro User Settings
  userFocusTimeDuration:
    getFromLocalStorage(preferenceKeys.focusTimer.key)?.value ||
    pomodoroTimer.focusTimer.defaultDuration,

  userShortBreakDuration:
    getFromLocalStorage(preferenceKeys.shortBreakTimer.key)?.value ||
    pomodoroTimer.shortBreakTimer.defaultDuration,

  userLongBreakDuration:
    getFromLocalStorage(preferenceKeys.longBreakTimer.key)?.value ||
    pomodoroTimer.longBreakTimer.defaultDuration,

  userPomodoroIntervals:
    getFromLocalStorage(preferenceKeys.intervalTimer.key)?.value ||
    pomodoroTimer.intervalTimer.defaultDuration,
}

export default pomodoroTimerInitialState
