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

  const soundsEnabled = getValueFromLocalStorage(user.enableSounds.key, true)

  const backgroundPhoto = getValueFromLocalStorage(user.backgroundPhoto.key, '')

  return {
    // Pomodoro State
    isPaused: true,
    status: 'Focus',

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
    isRoom: false,

    // Sounds
    soundsEnabled,

    // Custom
    backgroundPhoto,
  }
}

export default pomodoroUserInitialState
