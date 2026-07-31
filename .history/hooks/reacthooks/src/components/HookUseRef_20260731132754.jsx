import React from 'react'
import { useEffect, useState, useRef } from 'react'

const HookUseRef = () => {
    const numberRef = useRef(0)
    const [ counter, setCounter] = useState(0)
    const [ counterB, setCounter] = useState(0)
  return (
    <div>HookUseRef</div>
  )
}

export default HookUseRef