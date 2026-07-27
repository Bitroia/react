import React from 'react'
import { createContext } from 'react'
export

export const HookUseContext = ({children}) => {
  return (
    <SomeContext.Provider>
        {children}
    </SomeContext.Provider>
    <div>HookUseContext</div>
  )
}
