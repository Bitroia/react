import React from "react";

export const Events = () => {
  const handleClick = () => {
    console.log("Executou");
  };

  return (
    <div>
      <div></div>
     
    </div>
<div>
      <button onClick={handleClick}>Evento com função</button>
    </div>    
  );
};
