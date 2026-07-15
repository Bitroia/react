import React from 'react'
import { useState } from 'react'

const HookUseState = () => {
    //! useState
    const [name, setName] = useState ("Vitoria") 
  return (
    <div>
        {/* useState */}
        <h2>useState</h2>
        <p>useState:{name}</p>
    </div>
  )
}

export default HookUseState