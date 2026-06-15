import React from "react";
//! Carregamento de dados
import { useFetch } from "../hooks/UseFetch";


const Home = () => {
  const {data: items} = useFetch(url)
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
