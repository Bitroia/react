import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import React from "react";

const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => setCounter()}></button>
    </div>
  );
};

export default ChangeCounter;
