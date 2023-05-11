import { pomodoroTimer } from '../../basic/pomodoroTimer'
import { getValueFromLocalStorage } from '../../basic'
import preferenceKeys from '@/constants/preferenceKeys'
import { PomodoroTimerState } from '@/ts/interfaces/states/pomodoro'

const pomodoroUserInitialState = (): PomodoroTimerState => {
  const user = preferenceKeys.userPreferenceKeys

  const focusTimerValue = getValueFromLocalStorage(
    user.focusTimer.key,
    pomodoroTimer.focusTimer.defaultDuration
  )
  const shortBreakValue = getValueFromLocalStorage(
    user.shortBreakTimer.key,
    pomodoroTimer.shortBreakTimer.defaultDuration
  )
  const longBreakValue = getValueFromLocalStorage(
    user.longBreakTimer.key,
    pomodoroTimer.longBreakTimer.defaultDuration
  )
  const intervalValue = getValueFromLocalStorage(
    user.intervalTimer.key,
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
    focusTimeDuration: focusTimerValue,
    shortBreakDuration: shortBreakValue,
    longBreakDuration: longBreakValue,
    pomodoroIntervals: intervalValue,

    // Room Info
    isRoom: false
  }
}

export default pomodoroUserInitialState
