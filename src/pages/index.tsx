import React from 'react'

import PomodoroTimer from '@/components/PomodoroTimer'
import Layout from '@/components/Layout'
import appTitles from '@/constants/titles'
import useChangePageTitle from '@/hooks/general/useChangePageTitle'

export default function Home() {
  useChangePageTitle(appTitles.homeTitle)

  return (
    <Layout>
      <PomodoroTimer />
    </Layout>
  )
}
