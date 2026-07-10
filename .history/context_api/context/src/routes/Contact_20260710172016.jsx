import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Contact = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>Página de contato</h1>
      <p>Valor do </p>
    </div>
  );
};

export default Contact;
