import { useContext, useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app'
import { pauseTimer, startTimer, tick } from '@/app/slices/pomodoro/personal'
import PomodoroTimerUI from './PomodoroTimerUI'
import { AppMessageContext } from '@/context/AppMessageContext'
import appMessages from '@/constants/messages/app'

export default function PomodoroTimer() {
  const { minutes, seconds, isPaused, status } = useSelector(
    (state: RootState) => state.personalPomodoro
  )
  const { handleMessage } = useContext(AppMessageContext)

  const dispatch = useDispatch()
  const [anchorElMoreOptions, setAnchorElMoreOptions] =
    useState<null | HTMLElement>(null)
  const openMoreOptions = Boolean(anchorElMoreOptions)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMoreOptions(event.currentTarget)
  }

  const handleCloseMoreOptions = () => {
    setAnchorElMoreOptions(null)
  }

  useEffect(() => {
    if (!isPaused) {
      const timerInterval = setInterval(() => {
        dispatch(tick())
      }, 1000)

      return () => {
        clearInterval(timerInterval)
      }
    }
  }, [isPaused, dispatch])

  const handleStartTimer = () => {
    dispatch(startTimer())
    handleMessage(appMessages.pomodoro.sessionStartMessage)
  }

  const handlePauseTimer = () => {
    dispatch(pauseTimer())
    handleMessage(appMessages.pomodoro.sessionEndMessage)
  }

  return (
    <PomodoroTimerUI
      status={status}
      isPaused={isPaused}
      minutes={minutes}
      seconds={seconds}
      openMoreOptions={openMoreOptions}
      anchorElMoreOptions={anchorElMoreOptions}
      handleCloseMoreOptions={handleCloseMoreOptions}
      handleClick={handleClick}
      handlePauseTimer={handlePauseTimer}
      handleStartTimer={handleStartTimer}
    />
  )
}
