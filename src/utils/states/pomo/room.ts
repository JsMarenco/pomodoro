import preferenceKeys from '@/constants/preferenceKeys'
import { PomodoroTimerState } from '@/ts/interfaces/pomodoroTimerState.interface'
import { getValueFromLocalStorage } from '@/utils/basic'
import { pomodoroTimer } from '@/utils/basic/pomodoroTimer'

const pomodoroRoomInitialState = (): PomodoroTimerState => {
  const room = preferenceKeys.roomPreferenceKeys

  const focusTimerValue = getValueFromLocalStorage(
    room.focusTimer.key,
    pomodoroTimer.focusTimer.defaultDuration
  )
  const shortBreakValue = getValueFromLocalStorage(
    room.shortBreakTimer.key,
    pomodoroTimer.shortBreakTimer.defaultDuration
  )
  const longBreakValue = getValueFromLocalStorage(
    room.longBreakTimer.key,
    pomodoroTimer.longBreakTimer.defaultDuration
  )
  const intervalValue = getValueFromLocalStorage(
    room.intervalTimer.key,
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

    // Pomodoro Room Settings
    focusTimeDuration: focusTimerValue,
    shortBreakDuration: shortBreakValue,
    longBreakDuration: longBreakValue,
    pomodoroIntervals: intervalValue,
  }
}

export default pomodoroRoomInitialState
