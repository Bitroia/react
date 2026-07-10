import React from "react";

//! Alterando o valor do contexto
// import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

//! Refatorando com hook

import { useCounterContext } from "../hooks/useCounterContext";

//! Contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  //const { counter } = useContext(CounterContext);

  const { counter } = useCounterContext();
  const { color, dispatch } = useTitleColorContext();
  const set
  return (
    <div>
      <h1 style={{color:color}}>Home</h1>
      <p>Valor do counter:{counter}</p>
      <ChangeCounter />
      {/* Alterando contexto complexo */}
      <div>
        <button onClick={() =>}>Vermelho</button>
      </div>
    </div>
  );
};

export default Home;
