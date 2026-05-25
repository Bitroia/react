import React from "react";
import "./MyForm.css";

import { useState } from "react";

const MyForm = ({ userName, userEmail }) => {
  //! Gerenciamento de dados

  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [bio, setBio]

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);

    //! Limpar o form
    setName("");
    setEmail("");
    setBio("")
  };

  console.log(name, email, bio);

  return (
    <div>
      {/* Criação de form */}
      {/* Envio de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            //! Controlled input
            value={name}
          />
        </div>
        <input type="submit" value="Enviar" />
        {/* Label envolvendo input */}
        <label>
          <span>E-mail:</span>
          {/* Simplificando manipulação */}
          <input
            type="text"
            name="email"
            placeholder="Digite o seu email"
            onChange={(e) => setEmail(e.target.value)}
            //! Controlled input
            value={email}
          />
        </label>
        {/* textarea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
      </form>
    </div>
  );
};

export default MyForm;
