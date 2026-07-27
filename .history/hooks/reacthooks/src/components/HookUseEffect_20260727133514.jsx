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

  //! Array de dependências vazio

  useEffect(() => {
    console.log("Serei executado apenas uma vez");
  }, []);

  //! Array de dependencias com valores

  const [anotherNumber, setAnotherNumber] = useState(0);
  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executado apenas quando muda o anotherNumber");
    }
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Número: {number}</p>
      <button onClick={changeSomething}>Executar</button>
    </div>
  );
};

export default HookUseEffect;
