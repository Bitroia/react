//! Criar context

import { createContext, useState } from "react";

export const CounterContext = createContext();


//!Criar provider 
export const CounterContextProvider =({children}) => {
    const [counter, setCounter] = useState(5)
}