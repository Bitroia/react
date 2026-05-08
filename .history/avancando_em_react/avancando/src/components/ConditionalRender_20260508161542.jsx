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
        <div>
            <p>Olá, João!</p>
        </div>
    ) : (
       <div>
        <p>Nome não encontrado!</p>
       </div> 
    )}
  </div>;
};

export default ConditionalRender;
