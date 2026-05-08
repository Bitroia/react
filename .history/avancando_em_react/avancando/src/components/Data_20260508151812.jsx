import React, { useState } from "react";

const Data = () => {
    
  const [anotherNumber, setAnotherNumber] = useState(15);

  return (
    <div>
      <div>
        <p>Valor:{anotherNumber}</p>
        <button onClick={() => setAnotherNumber(20)}>Mudar state</button>
      </div>
    </div>
  );
};

export default Data;






