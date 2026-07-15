import React from "react";
import { useState } from "react";

const HookUseState = () => {
  //! useState
  let userName = "Joao";
  const [name, setName] = useState("Vitoria");

  const changeNames = () => {
    userName = "João da Silva";
    setName("")
  };

  return (
    <div>
      {/* useState */}
      <h2>useState</h2>
      <p>variável: {userName}</p>
      <p>useState:{name}</p>
      <button onClick={changeNames}>Mudar nomes</button>
    </div>
  );
};

export default HookUseState;
