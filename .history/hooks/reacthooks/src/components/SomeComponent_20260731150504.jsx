import React from "react";
import { forwardRef, useRef, useImperativeHandle } from "react";

const SomeComponent = () => {
  const localInputRef = useRef(ref);
  useImperativeHandle(ref, () => {})
  return (
    <div>
      <p>Insira no máximo 2 caracteres</p>
      <input type="text" ref={localInputRef} />
    </div>
  );
};

export default SomeComponent;
