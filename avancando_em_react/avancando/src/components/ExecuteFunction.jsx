import React from 'react'

const ExecuteFunction = ({myFunction}) => {
  return (
    <div>
        <button onClick={myFunction}>Executar minha função</button>
    </div>
  )
}

export default ExecuteFunction