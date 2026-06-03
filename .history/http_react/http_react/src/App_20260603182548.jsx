import "./App.css";
import { useState, useEffect } from "react";

const url = "http://localhost:3000/products";

function App() {
  //! Resgatando dados
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      setProducts(data)
    }

    getData();
  }, []);

  return (
    <div className="App">
      <h1>HTTP em React</h1>
      {/* Resgate de dados */}
      <ul>
        {products.map(())}
      </ul>
    </div>
  );
}

export default App;
