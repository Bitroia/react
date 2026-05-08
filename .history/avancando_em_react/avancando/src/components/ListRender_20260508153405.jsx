import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Vitoria", "Joao", "Maria"])

    const [users, setUsers] = useState ([
        {id:1, name: "Vitoria", age: 26}
    ])
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