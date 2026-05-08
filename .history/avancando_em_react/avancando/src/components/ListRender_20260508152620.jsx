import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Vitoria", "Joao", "Maria"])
  return (
    <div>
        <ul>
            {list.map}
        </ul>
    </div>
  )
}

export default ListRender