import React from "react";
import { useState } from "react";

const HookUseState = () => {
  //! useState
  let userName = "Joao";
  const [name, setName] = useState("Vitoria");

  const changeNames = () => {
    userName = "João da Silva";
    setName("Vitoria Cardozo");
  };

  //! useState e input

  const [age, setAge] = useState(18);

  return (
    <div>
      {/* useState */}
      <h2>useState</h2>
      <p>variável: {userName}</p>
      <p>useState:{name}</p>
      <button onClick={changeNames}>Mudar nomes</button>
      {/* useState e Input */}
      <form>
        <input type="text" name="" id="" />
      </form>
    </div>
  );
};

export default HookUseState;
