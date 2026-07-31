import React from "react";
import { useCallback, useState } from "react";

const HookUseCallback = () => {
  const [counter, setCounter] = useState();
  const getItemsFromDataBase = () => {
    return ["a", "b", "c"];
  };
  return <div>
    <h2>useCallback(
      () => {
        first
      },
      [second],
    )
    </h2>
  </div>;
};

export default HookUseCallback;
