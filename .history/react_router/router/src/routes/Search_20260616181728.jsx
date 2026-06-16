import React from "react";
import { UseFetch } from "../hooks/UseFetch";
import { Link, useSearchParams } from "react-router-dom";

const url = "http://localhost:3000/products";

const Search = () => {
  const { data: items } = UseFetch(url);

  const [sear]

  return (
    <div>
      <h1>Resultado da pesquisa</h1>
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$:{item.price}</p>
              {/* Rota dinâmica */}
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
