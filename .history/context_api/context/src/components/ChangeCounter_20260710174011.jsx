import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import React from "react";
import { useCounterContext } from "../hooks/useCounterContext";

const ChangeCounter = () => {
  const { counter, setCounter } = useCounterCFontext();
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
    </div>
  );
};

export default ChangeCounter;
