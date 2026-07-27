import React from 'react'
import { createContext } from 'react'
export const SomeContext = createContext()

export const HookUseContext = ({children}) => {
  return (
    <SomeContext.Provider value={{c}}>
        {children}
    </SomeContext.Provider>
  )
}
