import React, { createContext } from 'react'

import { VariantType, useSnackbar } from 'notistack'
import { ICCP, IMC } from '@/ts/interfaces/context'

export const AppMessageContext = createContext<IMC>({
  handleMessage: () =>
    console.log(
      '🚀 ~ file: MessageContext.tsx:12 ~ handleMessage is not defined'
    ),
})

/**
 * App message context
 * @param props ReactNode
 * @returns Message context provider
 */
export const AppMessageContextProvider = (props: ICCP) => {
  const { enqueueSnackbar } = useSnackbar()

  /**
   * Create a new message
   * @param message The message that will be display
   * @param variant "default" | "error" | "success" | "warning" | "info"
   */
  const handleMessage = (message: string, variant: VariantType = 'success') => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(message, { variant })
  }

  return (
    <>
      <AppMessageContext.Provider value={{ handleMessage }}>
        {props.children}
      </AppMessageContext.Provider>
    </>
  )
}
