import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { useCounterContext } from "../hooks/useCounterContext";

const Contact = () => {
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Página de contato</h1>
      <p>Valor do counter:{counter}</p>
    </div>
  );
};

export default Contact;
