import React from "react";

const Data = () => {
  let someData = 10;

  const 

  return <div>
    <div>
        <p>Valor: {someData}</p>
        <button onClick={() => someData = 15}>Mudar variável</button>
    </div>
  </div>;
};

export default Data;
