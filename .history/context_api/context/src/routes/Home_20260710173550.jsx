import React from "react";

//! Alterando o valor do contexto
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";


const Home = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do counter:{counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default Home;
