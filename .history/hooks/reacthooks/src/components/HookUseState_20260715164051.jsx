import React from 'react'
import { useState } from 'react'

const HookUseState = () => {
    //! useState
    const [name, setName] = useState ("Vitoria") 
  return (
    <div>HookUseState</div>
  )
}

export default HookUseState