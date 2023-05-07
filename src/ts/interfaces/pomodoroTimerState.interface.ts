export type PomodoroStatus = 'Pause' | 'Focus' | 'Break' | 'Long break'

export interface PomodoroTimerState {
  // Pomodoro State
  isPaused: boolean
  status: PomodoroStatus

  // Pomodoro Time
  minutes: number
  seconds: number
  currentInterval: number

  // Pomodoro User Settings
  userFocusTimeDuration: number
  userShortBreakDuration: number
  userLongBreakDuration: number
  userPomodoroIntervals: number
}
