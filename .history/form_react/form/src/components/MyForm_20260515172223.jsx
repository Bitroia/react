import React from 'react'
import "./MyForm.css"

const MyForm = () => {
  return (
    <div>
        {/* Criação de form */}
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name'placeholder='Digite o seu nome'/>
            </div>
            <input type="submit" name="" id="" />
        </form>
    </div>
  )
}

export default MyForm