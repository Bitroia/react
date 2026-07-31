import React from "react";
import { useCallback, useState } from "react";
import 

const HookUseCallback = () => {
  const [counter, setCounter] = useState();
  const getItemsFromDataBase = () => {
    return ["a", "b", "c"];
  };
  return (
    <div>
      <h2>useCallback</h2>
      <button onClick={() => setCounter(counter + 1)}>Alterar</button>
      <p>{counter}</p>
      <hr />
    </div>
  );
};

export default HookUseCallback;
