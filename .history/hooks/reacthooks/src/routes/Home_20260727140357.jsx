import React from "react";
import HookUseState from "../components/HookUseState";
import HookUseReducer from "../components/HookUseReducer";
import HookUseEffect from "../components/HookUseEffect";
import { SomeContext } from "../components/HookUseContext";
import { useContext } from "react";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
    </div>
  );
};

export default Home;
