import { FC, useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app'
import {
  goToNextInterval,
  pauseTimer,
  startTimer,
  switchToRoomMode,
  switchToSingleMode,
  tick,
} from '@/app/slices/pomodoro/personal'
import PomodoroTimerUI from './PomodoroTimerUI'
import { useRouter } from 'next/router'
import appRoutes from '@/constants/routes/app'

interface PomodoroTimerProps {
  isPrivateRoom?: boolean
}

const PomodoroTimer: FC<PomodoroTimerProps> = ({ isPrivateRoom = false }) => {
  const {
    minutes,
    seconds,
    isPaused,
    status,
    currentInterval,
    pomodoroIntervals,
    isRoom,
    participants,
  } = useSelector((state: RootState) => state.personalPomodoro)

  const dispatch = useDispatch()
  const [anchorElMoreOptions, setAnchorElMoreOptions] =
    useState<null | HTMLElement>(null)
  const openMoreOptions = Boolean(anchorElMoreOptions)
  const router = useRouter()

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

  useEffect(() => {
    if (!isRoom && router.pathname !== '/') {
      dispatch(switchToRoomMode())
    }

    if (isRoom && router.pathname === '/') {
      dispatch(switchToSingleMode())
    }
  }, [dispatch, isRoom, router.pathname])

  const handleStartTimer = () => {
    dispatch(startTimer())
  }

  const handlePauseTimer = () => {
    dispatch(pauseTimer())
  }

  const handleGoToNextInterval = () => {
    dispatch(goToNextInterval())
  }

  const handleLeftRoom = async () => {
    router.push(appRoutes.home)
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
      currentInterval={currentInterval}
      pomodoroIntervals={pomodoroIntervals}
      handleGoToNextInterval={handleGoToNextInterval}
      isRoom={isPrivateRoom}
      roomParticipants={participants || 1}
      handleLeftRoom={handleLeftRoom}
    />
  )
}

export default PomodoroTimer
