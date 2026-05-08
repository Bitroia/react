import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Vitoria", "Joao", "Maria"])
  return (
    <div>
        <ul>
            {list.map((item) => (
                LI
            ))}
        </ul>
    </div>
  )
}

export default ListRender