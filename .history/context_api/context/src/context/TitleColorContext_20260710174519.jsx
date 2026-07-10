import { Children, createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const TitleColorReducer = (state, action) => {
    switch(action.type) {
        case "RED":
            return{...state, color: "red"}
            case "BLUE":
    }
}

export const TitleColorContextProvider = ({ children }) => {
  return <TitleColorContext.Provider>{children}</TitleColorContext.Provider>;
};
