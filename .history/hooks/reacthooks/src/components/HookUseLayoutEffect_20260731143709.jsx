import React from "react";
import { useLayoutEffect, useEffect, useState } from "react";

const HookUseLayoutEffect = () => {
  const [name, setName] = useState("Algum nome");

  useEffect(() => {
    console.log("2")
  })

  return <div>HookUseLayoutEffect</div>;
};

export default HookUseLayoutEffect;
