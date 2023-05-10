import React, { useEffect, useState } from 'react'

import PomodoroTimer from '@/components/PomodoroTimer'
import Layout from '@/components/Layout'
import appTitles from '@/constants/titles'
import useChangePageTitle from '@/hooks/general/useChangePageTitle'
import AppLoader from '@/components/AppLoader'

export default function Home() {
  useChangePageTitle(appTitles.homeTitle)

  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 2000)
  }, [])

  return (
    <Layout>
      {loading && <AppLoader />}

      {!loading && <PomodoroTimer />}
    </Layout>
  )
}
