import React from "react";

const ConditionalRender = () => {
  const x = true;
  
  return <div>
    {/* Render condicional */}
    <h3>Issos será exibido?</h3>
    {x && <p>Se </p>}
  </div>;
};

export default ConditionalRender;
