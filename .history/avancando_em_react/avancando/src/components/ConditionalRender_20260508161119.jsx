import React from "react";

const ConditionalRender = () => {
  const x = true;
  
  return <div>
    {/* Render condicional */}
    <h3>Isso será exibido?</h3>
    {x && <p>Se x for true, sim!</p>}
  </div>;
};

export default ConditionalRender;
