import React from "react";

//! Alterando o valor do contexto
import { useContext } from "react";
import <CounterContext></CounterContext> from "./context/CounterContext" 

const Home = () => {
  const {counter} = useContext(CounterCounter)

  return (
    <div>
      <h1>Home</h1>
      <p></p>
    </div>
  );
};

export default Home;
