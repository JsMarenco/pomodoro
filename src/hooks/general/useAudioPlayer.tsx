import { RootState } from '@/app'
import React from 'react'
import { useSelector } from 'react-redux'

const useAudioPlayer = () => {
  const { soundsEnabled } = useSelector(
    (state: RootState) => state.personalPomodoro
  )

  const play = (soundUrl: string, volume: number) => {
    if (soundsEnabled && soundUrl) {
      const audio = new Audio(soundUrl)
      audio.volume - volume
      audio.play()
    }
  }

  return {
    play,
  }
}

export default useAudioPlayer
