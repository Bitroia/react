import React from "react";

const ConditionalRender = () => {
  const x = true;
  const name = "Vitoria"
  
  return <div>
    {/* Render condicional */}
    <h3>Isso será exibido?</h3>
    {x > 2 && <p>Se x for true, sim!</p>}
    {/* Else */}
    {name === "Joao" ? (
        div
    )}
  </div>;
};

export default ConditionalRender;
