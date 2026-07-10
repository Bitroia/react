import { Children, createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const TitleColorReducer = (state, action) => {
    
}

export const TitleColorContextProvider = ({ children }) => {
  return <TitleColorContext.Provider>{children}</TitleColorContext.Provider>;
};
