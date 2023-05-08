import { PomodoroTimerState } from '@/ts/interfaces/pomodoroTimerState.interface'
import { pomodoroTimer } from '../basic/pomodoroTimer'
import { getValueFromLocalStorage } from '../basic'
import preferenceKeys from '@/constants/preferenceKeys'

const pomodoroTimerInitialState = (): PomodoroTimerState => {
  const focusTimerValue = getValueFromLocalStorage(
    preferenceKeys.focusTimer.key,
    pomodoroTimer.focusTimer.defaultDuration
  )
  const shortBreakValue = getValueFromLocalStorage(
    preferenceKeys.shortBreakTimer.key,
    pomodoroTimer.shortBreakTimer.defaultDuration
  )
  const longBreakValue = getValueFromLocalStorage(
    preferenceKeys.longBreakTimer.key,
    pomodoroTimer.longBreakTimer.defaultDuration
  )
  const intervalValue = getValueFromLocalStorage(
    preferenceKeys.intervalTimer.key,
    pomodoroTimer.intervalTimer.defaultDuration
  )

  return {
    // Pomodoro State
    isPaused: true,
    status: 'Pause',

    // Pomodoro Time
    minutes: focusTimerValue,
    seconds: 0,
    currentInterval: 1,

    // Pomodoro User Settings
    userFocusTimeDuration: focusTimerValue,
    userShortBreakDuration: shortBreakValue,
    userLongBreakDuration: longBreakValue,
    userPomodoroIntervals: intervalValue,
  }
}

export default pomodoroTimerInitialState
