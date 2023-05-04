import React, { FC, ReactNode, useContext, useEffect } from 'react'

import { SnackbarProvider } from 'notistack'

import {
  AppMessageContext,
  AppMessageContextProvider,
} from './AppMessageContext'
import appMessages from '@/constants/messages/app'
import { AppThemeContextProvider } from './AppThemeContext'

const GlobalContext: FC<{ children: ReactNode }> = ({ children }) => {
  const { handleMessage } = useContext(AppMessageContext)

  useEffect(() => {
    function handleConnectionChange() {
      if (navigator.onLine) {
        handleMessage(appMessages.internet.reconnectedMessage)
      } else {
        handleMessage(appMessages.internet.lostConnectionMessage)
      }
    }

    window.addEventListener('online', handleConnectionChange)
    window.addEventListener('offline', handleConnectionChange)

    return () => {
      window.removeEventListener('online', handleConnectionChange)
      window.removeEventListener('offline', handleConnectionChange)
    }
  }, [handleMessage])

  return (
    <>
      <SnackbarProvider maxSnack={3} style={{ backgroundColor: 'black' }}>
        <AppMessageContextProvider>
          <AppThemeContextProvider>{children}</AppThemeContextProvider>
        </AppMessageContextProvider>
      </SnackbarProvider>
    </>
  )
}

export default GlobalContext
