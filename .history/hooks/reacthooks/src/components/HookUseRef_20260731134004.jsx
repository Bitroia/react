import React from "react";
import { useEffect, useState, useRef } from "react";

const HookUseRef = () => {
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);
  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });

  //! useRef e DOM

  const inputRef = useRef();
  const [text, setText] = useState("");
  return (
    <div>
      <h2>useRef</h2>
      <p>O compnente renderizou: {numberRef.current}</p>
      <p>Counter 1: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Contador A</button>
      <p>Counter 2: {counterB}</p>
      <button onClick={() => setCounterB(counter + 1)}>Contador B</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <hr />
    </div>
  );
};

export default HookUseRef;
