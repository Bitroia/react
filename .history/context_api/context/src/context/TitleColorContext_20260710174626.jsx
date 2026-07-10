import { Children, createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const TitleColorReducer = (state, action) => {
  switch (action.type) {
    case "RED":
      return { ...state, color: "red" };
    case "BLUE":
      return { ...state, color: "blue" };
    default:
      return state;
  }
};

export const TitleColorContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer()
  return <TitleColorContext.Provider>{children}</TitleColorContext.Provider>;
};
