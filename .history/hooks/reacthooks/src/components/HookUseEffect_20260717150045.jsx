import React from "react";
import { useEffect, useState } from "react";

const HookUseEffect = () => {
  //! useEffect sem dependências
  useEffect(() => {
    console.log("Estou sendo executado");
  });

  const [number, setNumber] = useState(1);

  
  return <div>HookUseEffect</div>;
};

export default HookUseEffect;
