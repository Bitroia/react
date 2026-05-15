import React from 'react'

const ChangeMessage = ({handleMessage}) => {
    const messages = ["oi", "olá", "tudo bem?"]
  return (
    <div>
        <button onClick={() => handleMessage}></button>
    </div>
  )
}

export default ChangeMessage