import "./App.css";
import { useState, useEffect } from "react";

const url = "http"

function App() {
  //! Resgatando dados
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log("Carregou");
  }, []);

  return (
    <div className="App">
      <h1>HTTP em React</h1>
    </div>
  );
}

export default App;
