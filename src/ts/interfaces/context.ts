import { ReactNode } from 'react'

// Third-party dependencies

// Current project dependencies

/**
 * Context Children Props Interface
 */
export interface ICCP {
  children: ReactNode
}

/**
 * App Theme Context interface
 */
export interface IATC {
  handleChangeThemeApp: () => void
  currentThemeName: string
  handleChangeBgImage: (url: string) => void
}

/**
 * Message Context Interface
 */
export interface IMC {
  handleMessage: (message: string) => void
}
