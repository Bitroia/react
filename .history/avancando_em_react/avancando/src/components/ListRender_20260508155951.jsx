import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Vitoria", "Joao", "Maria"])

    const [users, setUsers] = useState ([
        {id:1, name: "Vitoria", age: 26},
        {id:2, name: "Joao", age: 54},
        {id:3, name: "Maria", age: 35},
        {id:4, name: "Cris", age: 23},
    ])
  return (
    <div>
        {/* Render sem key */}
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>   
        {/* Render com key */}
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} = {user.age} anos</li>
            ))}
        </ul>
        {/*  */}
    </div>
  )
}

export default ListRender