import React from "react";
import { useEffect, useState } from "react";

const HookUseEffect = () => {
  //! useEffect sem dependências
  useEffect(() => {
    console.log("Estou sendo executado");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

//! Array de deps. vazio

useEffect(())

  return <div>
    <h2>useEffect</h2>
    <p>Número: {number}</p>
    <button onClick={changeSomething}>Executar</button>
  </div>;
};

export default HookUseEffect;
