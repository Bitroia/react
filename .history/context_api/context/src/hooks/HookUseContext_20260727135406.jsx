import React from 'react'
import { createContext } from 'react'
export const SomeContext = createContext()

export const HookUseContext = ({children}) => {
  return (
    <SomeContext.Provider value={}>
        {children}
    </SomeContext.Provider>
  )
}
