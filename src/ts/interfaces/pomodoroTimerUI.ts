import { PomodoroStatus } from './states/pomodoro'

export interface PomodoroTimerUIProps {
  status: PomodoroStatus
  isPaused: boolean

  minutes: number
  seconds: number

  openMoreOptions: boolean
  anchorElMoreOptions: null | HTMLElement
  handleCloseMoreOptions: () => void

  handleClick: (event: React.MouseEvent<HTMLElement>) => void
  handlePauseTimer: () => void
  handleStartTimer: () => void
  handleGoToNextInterval: () => void
  handleLeftRoom: () => void

  currentInterval: number
  pomodoroIntervals: number

  isRoom: boolean
  roomParticipants: number
}
