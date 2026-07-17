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

  return <div>
    <h2>useEffect</h2>
    <p>Número: {}</p>
  </div>;
};

export default HookUseEffect;
