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
import appSounds from '@/constants/sounds'
import useAudioPlayer from '@/hooks/general/useAudioPlayer'

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
    soundsEnabled,
  } = useSelector((state: RootState) => state.personalPomodoro)

  const dispatch = useDispatch()
  const [anchorElMoreOptions, setAnchorElMoreOptions] =
    useState<null | HTMLElement>(null)
  const openMoreOptions = Boolean(anchorElMoreOptions)
  const router = useRouter()
  const { play } = useAudioPlayer()

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
    if (!soundsEnabled) return
    if (isPaused) return

    if (status === 'Break') {
      const url = appSounds.break.start.url
      const volume = appSounds.break.start.volume

      play(url, volume)
    }

    if (status === 'Focus') {
      const url = appSounds.pomodoro.start.url
      const volume = appSounds.pomodoro.start.volume

      play(url, volume)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

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
