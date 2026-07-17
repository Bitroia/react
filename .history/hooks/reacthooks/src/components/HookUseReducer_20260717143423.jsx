import React from 'react'
import { useReducer } from 'react'

const HookUseReducer = () => {

    //! começando com o useReducer
    
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)    })
  return (
    <div>HookUseReducer</div>
  )
}

export default HookUseReducer