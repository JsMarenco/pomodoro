import { useState, useEffect, useRef } from 'react'

interface CountdownTimer {
  isPaused: boolean
  start: () => void
  pause: () => void
  reset: () => void
  minutes: number
  seconds: number
  incrementMinutes: () => void
  decrementMinutes: () => void
}

const pomo = {
  default: {
    maxTime: 60,
    minTime: 5,
    defaultTime: 9,
    defaultBreak: 5,
  },
}

const useCountdownTimer = (): CountdownTimer => {
  const [isPaused, setIsPaused] = useState(true)
  const [initialMinutes, setInitialMinutes] = useState(pomo.default.defaultTime)
  const [minutes, setMinutes] = useState(pomo.default.defaultTime)
  const [seconds, setSeconds] = useState(0)
  const intervalRef = useRef<number | undefined>()

  const start = () => {
    setIsPaused(false)
    intervalRef.current = window.setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          if (minutes === 0) {
            pause()
            return 0
          }
          setMinutes((prevMinutes) => prevMinutes - 1)
          return 59
        }
        return prevSeconds - 1
      })
    }, 1000)
  }

  const pause = () => {
    setIsPaused(true)
    window.clearInterval(intervalRef.current)
  }

  const reset = () => {
    setIsPaused(true)
    setInitialMinutes(pomo.default.defaultTime)
    setMinutes(pomo.default.defaultTime)
    setSeconds(0)
    window.clearInterval(intervalRef.current)
  }

  const incrementMinutes = () => {
    if (initialMinutes < pomo.default.maxTime) {
      setInitialMinutes(initialMinutes + 1)
      setMinutes(initialMinutes + 1)
    }
  }

  const decrementMinutes = () => {
    if (initialMinutes > pomo.default.minTime) {
      setInitialMinutes(initialMinutes - 1)
      setMinutes(initialMinutes - 1)
    }
  }

  useEffect(() => {
    if (!isPaused) {
      start()
    }
    return () => {
      pause()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused])

  return {
    isPaused,
    start,
    pause,
    reset,
    minutes,
    seconds,
    incrementMinutes,
    decrementMinutes,
  }
}

export default useCountdownTimer
