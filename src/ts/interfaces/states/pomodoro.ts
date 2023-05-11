export type PomodoroStatus = 'Pause' | 'Focus' | 'Break' | 'Long break'

export interface PomodoroTimerState {
  // Pomodoro State
  isPaused: boolean
  status: PomodoroStatus

  // Pomodoro Time
  minutes: number
  seconds: number
  currentInterval: number

  // Pomodoro Timer Settings
  focusTimeDuration: number
  shortBreakDuration: number
  longBreakDuration: number
  pomodoroIntervals: number

  // Room Info
  isRoom: boolean
}
