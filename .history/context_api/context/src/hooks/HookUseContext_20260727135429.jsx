import React from 'react'
import { createContext } from 'react'
export const SomeContext = createContext()

export const HookUseContext = ({children}) => {
  return (
    <SomeContext.Provider value={{contextValue}}>
        {children}
    </SomeContext.Provider>
  )
}
