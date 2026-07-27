import React from "react";
import HookUseState from "../components/HookUseState";
import HookUseReducer from "../components/HookUseReducer";
import HookUseEffect from "../components/HookUseEffect";
import { SomeContext } from "../components/HookUseContext";
import { useContext } from "react";

const Home = () => {
  const { contextValue } = useContext(SomeContext);
  return (
    <div>
      <h1>Home</h1>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>V</p>
    </div>
  );
};

export default Home;
