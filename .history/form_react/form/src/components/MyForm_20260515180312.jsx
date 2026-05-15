import React from "react";
import "./MyForm.css";

import { useState } from "react";

const MyForm = () => {
  //! Gerenciamento de dados

  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  console.log(name)

  return (
    <div>
      {/* Criação de form */}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
          />
        </div>
        <input type="submit" value="Enviar" />
        {/* Label envolvendo input */}
        <label>
          <span>E-mail:</span>
          <input type="text" name="email" placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.va)}/>
        </label>
      </form>
    </div>
  );
};

export default MyForm;
