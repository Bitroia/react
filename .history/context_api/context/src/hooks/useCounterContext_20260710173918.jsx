import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const seCounterContext = () => {
  const context = useContext(CounterContext);

  if (!context) {
    console.log("Contexto não encontrado");
    return;
  }

  console.log(context);
  return context;
};
