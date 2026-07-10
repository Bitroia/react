import { useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import 
function App() {
  return (
    <div className="app">
      <Navbar />
      <h1>Context API</h1>
      <Outlet />
    </div>
  );
}

export default App;
