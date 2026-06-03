import "./App.css";
import { useState, useEffect } from "react";

const url = "http://localhost:3000/products"

function App() {
  //! Resgatando dados
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getData(){
      const res = await fetch
    }
    console.log("Carregou");
  }, []);

  return (
    <div className="App">
      <h1>HTTP em React</h1>
    </div>
  );
}

export default App;
