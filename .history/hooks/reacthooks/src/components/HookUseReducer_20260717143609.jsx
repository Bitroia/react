import React from 'react'
import { useReducer } from 'react'

const HookUseReducer = () => {

    //! começando com o useReducer
    
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)    })
  return (
    <div>
        <h2>useReducer</h2>
        <p>Número</p>
    </div>
  )
}

export default HookUseReducer