import React from "react";
import { forwardRef, useRef, useImperativeHandle } from "react";

const SomeComponent = () => {
  const localInputRef = useRef();
  useImperativeHandle(ref, () => {
    return{
      validate: () => {
        if (local)
      }
    }
  })
  return (
    <div>
      <p>Insira no máximo 2 caracteres</p>
      <input type="text" ref={localInputRef} />
    </div>
  );
};

export default SomeComponent;
