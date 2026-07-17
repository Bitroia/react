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
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value={} />
      </form>
    </div>
  );
};

export default HookUseState;
