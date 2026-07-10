import React from "react";
//!   Rota dinâmica
import { Link } from "react-router-dom";


const Home = () => {
  const { data: items } = UseFetch(url);
  console.log(items)
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
