export type PomodoroStatus = 'Focus' | 'Break' | 'Long break'

export interface Room {
  // Room info
  name: string
  description?: string

  // Participants
  participants: number

  // Link and alias
  link: string
  linkAlias: string

  // Host
  host: {
    fullname: string
  }
}

export interface PomodoroTimerState extends Partial<Room> {
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

  // Sounds
  soundsEnabled: boolean

  // Custom
  backgroundPhoto?: string
}
