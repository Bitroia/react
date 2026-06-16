import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./routes/Product";
import SearchForm from "./components/SearchForm";
//!Link entre paginas

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <SearchForm/>
      <Outlet />
      <p>Footer</p>
    </div>
  );
}

export default App;
