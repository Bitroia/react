import React from "react";

export const Events = () => {
  const handleClick = () => {
    console.log("Executou");
  };

  //! Função de renderização

  const renderSomething = (x) =>{
    if(x){
      return <h1>Renderizando isso!</h1>
    } else {
      return <h1>Renderizando outra coisa!</h1>
    }
  }

  return (
    <div>
      <div>
        <button onClick={() => console.log("Testando um evento")}>
          Clique aqui
        </button>
      </div>
      <div>
        <button onClick={handleClick}>
          Evento com função
        </button>
      </div>
      {renderSomething(true)}
      {renderSomething()}
    </div>
  );
};
