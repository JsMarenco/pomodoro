import { PomodoroTimerState } from '@/ts/interfaces/pomodoroTimerState.interface'
import { pomodoroTimer } from '../basic/pomodoroTimer'

const pomodoroTimerInitialState: PomodoroTimerState = {
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

export default pomodoroTimerInitialState
