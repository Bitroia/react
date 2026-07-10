import { Children, createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export con

export const TitleColorContextProvider = ({ children }) => {
  return <TitleColorContext.Provider>{children}</TitleColorContext.Provider>;
};
