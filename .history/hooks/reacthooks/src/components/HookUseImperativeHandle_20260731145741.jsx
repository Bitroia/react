import React from "react";
import { useRef } from "react";

const HookUseImperativeHandle = () => {
  const componentRef = useRef();

  return (
    <div>
      <h2>UseImperativeHandle</h2>
      <SomeComponent ref= {}/>
    </div>
  );
};

export default HookUseImperativeHandle;
