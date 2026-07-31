import React from 'react'
import { forwardRef, useRef, useImperativeHandle } from 'react'

const SomeComponent = () => {
  const localInputRef = useRef()
  return (
    <div>
      <p>Insira no máximo 2 caracteres</p>
      <input type="text" ref="" id="" />
    </div>
  )
}

export default SomeComponent