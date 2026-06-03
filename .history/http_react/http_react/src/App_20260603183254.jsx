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

  //! Envio de dados
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  return (
    <div className="App">
      <h1>HTTP em React</h1>
      {/* Resgate de dados */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - R${products.price}</li>
        ))}
      </ul>
      {/* enviando dados */}
      <div className="add-product">
        <form>
          <label>
            <span>Nome</span>
            <input type="text" value={name} onChange={(e)} />
          </label>
        </form>
      </div>
    </div>
  );
}

export default App;
