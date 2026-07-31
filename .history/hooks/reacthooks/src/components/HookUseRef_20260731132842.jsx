import React from "react";
import { useEffect, useState, useRef } from "react";

const HookUseRef = () => {
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);
  return <div>
    <h2>useRef</h2>
    <p>O compoment</p>
  </div>;
};

export default HookUseRef;
