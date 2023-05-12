import preferenceKeys from '@/constants/preferenceKeys'
import { getValueFromLocalStorage } from '@/utils/basic'
import { pomodoroTimer } from '@/utils/basic/pomodoroTimer'
import { PomodoroTimerState, Room } from '@/ts/interfaces/states/pomodoro'

export const roomInitState: Room = {
  name: '',
  description: '',
  link: '',
  linkAlias: '',
  participants: 0,
  host: {
    fullname: '',
  },
}

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

  const soundsEnabled = getValueFromLocalStorage(
    room.enableSounds.key,
    true
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

    // Room Info
    isRoom: true,

    ...roomInitState,

    // Sounds
    soundsEnabled,
  }
}

export default pomodoroRoomInitialState
