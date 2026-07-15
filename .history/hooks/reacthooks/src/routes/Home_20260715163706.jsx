import React from "react";

const Home = () => {
  

  const { counter } = seCounterContext();

  
  return (
    <div>
      <h1 style={{color:color}}>Home</h1>
      <p>Valor do counter:{counter}</p>
      <ChangeCounter />
      {/* Alterando contexto complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
};

export default Home;
