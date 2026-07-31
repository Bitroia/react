import React from 'react'
import { forwardRef, useRef, useImperativeHandle } from 'react'

const SomeComponent = () => {
  const localInputRef = useRef()
  return (
    <div>
      <p>Insira no máximo </p>
    </div>
  )
}

export default SomeComponent