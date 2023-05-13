import React, { useEffect, useState } from 'react'

import PomodoroTimer from '@/components/PomodoroTimer'
import appTitles from '@/constants/titles'
import useChangePageTitle from '@/hooks/general/useChangePageTitle'
import AppLoader from '@/components/AppLoader'

export default function Home() {
  useChangePageTitle(appTitles.homeTitle)

  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 1000)
  }, [])

  return (
    <>
      {loading && <AppLoader />}

      {!loading && <PomodoroTimer />}
    </>
  )
}
