import { Children, createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const TitleColorRe

export const TitleColorContextProvider = ({ children }) => {
  return <TitleColorContext.Provider>{children}</TitleColorContext.Provider>;
};
