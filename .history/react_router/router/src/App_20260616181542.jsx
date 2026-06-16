import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./routes/Product";

//!Link entre paginas

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Sear
      <Outlet />
      <p>Footer</p>
    </div>
  );
}

export default App;
