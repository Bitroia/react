import "./App.css";
import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  //! Resgatando dados
  //const [products, setProducts] = useState([]);
  //! custom hook

  const { data: items, httpConfig, loading, error } = useFetch(url);

  // useEffect(() => {
  //   async function getData() {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     console.log(data);

  //     setProducts(data);
  //   }

  //   getData();
  // }, []);

  //! Envio de dados
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    //! Refatorando

    httpConfig(product, "POST");

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // //! Carregamento dinâmico

    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);
  };

  const clearText = () => {
    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>HTTP em React</h1>
      {/* Loading */}
      {loading && <p>Carregando...</p>}
      {/* Tratando erro */}
      {/* Resgate de dados */}
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.name} - R${product.price}
            </li>
          ))}
      </ul>
      {/* enviando dados */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <span>Preço</span>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <div className="btns-area">
            {/* <input id="btn-enviar" type="submit" value="Enviar" /> */}
            {/* Loading Post */}
            {loading && <input type="submit" disabled value="Aguarde" />}
            {!loading && <input type="submit" value="Criar" />}
            {/* <input
              id="btn-limpar"
              type="button"
              value="Limpar"
              onClick={clearText}
            /> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
