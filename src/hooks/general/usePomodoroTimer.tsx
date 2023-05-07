import { pomodoroTimer } from '@/utils/basic/pomodoroTimer'
import { useState, useEffect, useRef } from 'react'

type pomodorStatus = 'Pause' | 'Focus' | 'Break' | 'Long break'

interface PomodoroTimer {
  isPaused: boolean

  startTimer: () => void
  pauseTimer: () => void
  resetTimer: () => void

  minutes: number
  seconds: number
  shortBreakDuration: number
  longBreakDuration: number
  pomodoroIntervals: number

  updateMinutes: (minutes: number) => void
  updateShortBreakDuration: (newShortBreakDuration: number) => void
  updateLongBreakDuration: (newLongBreakDuration: number) => void
  updatePomodoroIntervals: (newIntervals: number) => void

  status: pomodorStatus
}

const usePomodoroTimer = (): PomodoroTimer => {
  const intervalRef = useRef<number | undefined>()

  const [isPaused, setIsPaused] = useState(true)

  const [minutes, setMinutes] = useState(pomodoroTimer.focusTimer.defaultDuration)
  const [seconds, setSeconds] = useState(0)
  const [shortBreakDuration, setShortBreakDuration] = useState(pomodoroTimer.shortBreakTimer.defaultDuration)
  const [longBreakDuration, setLongBreakDuration] = useState(pomodoroTimer.longBreakTimer.defaultDuration)
  const [pomodoroIntervals, setPomodoroIntervals] = useState(pomodoroTimer.intervalTimer.defaultDuration)
  const [status, setStatus] = useState<pomodorStatus>('Pause')

  const startTimer = () => {
    setIsPaused(false)
    setStatus('Focus')
    intervalRef.current = window.setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          if (minutes === 0) {
            pauseTimer()
            return 0
          }
          setMinutes((prevMinutes) => prevMinutes - 1)
          return 59
        }
        return prevSeconds - 1
      })
    }, 1000)
  }

  const pauseTimer = () => {
    setIsPaused(true)
    setStatus('Pause')
    window.clearInterval(intervalRef.current)
  }

  const resetTimer = () => {
    setIsPaused(true)
    setStatus('Pause')
    setMinutes(25)
    setSeconds(0)
    window.clearInterval(intervalRef.current)
  }

  const updateMinutes = (newMinutes: number) => {
    setMinutes(newMinutes)
  }

  const updateShortBreakDuration = (newShortBreakDuration: number) => {
    setShortBreakDuration(newShortBreakDuration)
  }

  const updateLongBreakDuration = (newLongBreakDuration: number) => {
    setLongBreakDuration(newLongBreakDuration)
  }

  const updatePomodoroIntervals = (newIntervals: number) => {
    setPomodoroIntervals(newIntervals)
  }

  useEffect(() => {
    if (!isPaused) {
      startTimer()
    }
    return () => {
      pauseTimer()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused])

  return {
    isPaused,

    startTimer,
    pauseTimer,
    resetTimer,

    minutes,
    seconds,
    shortBreakDuration,
    longBreakDuration,
    pomodoroIntervals,

    updateMinutes,
    updateShortBreakDuration,
    updateLongBreakDuration,
    updatePomodoroIntervals,

    status
  }
}

export default usePomodoroTimer
