import { RootState } from '@/app'
import AppLoader from '@/components/AppLoader'
import PomodoroTimer from '@/components/PomodoroTimer'
import useChangePageTitle from '@/hooks/general/useChangePageTitle'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Room() {
  const [loading, setLoading] = useState(true)
  const { name } = useSelector((state: RootState) => state.personalPomodoro)
  useChangePageTitle(name || 'Private Room')

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {!loading && <PomodoroTimer isPrivateRoom={true} />}

      {loading && <AppLoader />}
    </>
  )
}
