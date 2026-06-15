import React from "react";
//! Carregamento de dados
import { useFetch } from "../hooks/UseFetch";

const url = "http://localhost:3000/products"

const Home = () => {
  const {data: items} = useFetch(url)
  return (
    <div>
      <h1>Home</h1>
      {/* carregamento de dados */}
      <ul className="products">
        {items && items.map((item) => (
          <li key={}></li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
