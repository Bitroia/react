import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Vitoria", "Joao", "Maria"])

    const [users, setUsers] = useState ([])
  return (
    <div>
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender