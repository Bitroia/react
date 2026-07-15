import React from "react";

const Home = () => {
  return (
    <div>
      <h1 style={{color:color}}>Home</h1>
      <p>Valor do counter:{counter}</p>
      {/* Alterando contexto complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
};

export default Home;
