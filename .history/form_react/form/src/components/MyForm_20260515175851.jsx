import React from "react";
import "./MyForm.css";

import { useState } from "react";

const MyForm = () => {
    //! Gerenciamento de dados
  return (
    <div>
      {/* Criação de form */}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" name="name" placeholder="Digite o seu nome" />
        </div>
        <input type="submit" value="Enviar" />
        {/* Label envolvendo input */}
        <label>
            <span>E-mail:</span>
            <input type="text" name="email" placeholder="Digite o seu email"/>
        </label>
      </form>
    </div>
  );
};

export default MyForm;
