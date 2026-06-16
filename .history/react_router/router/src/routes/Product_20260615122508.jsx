import React from "react";
import { useFetch } from "../hooks/UseFetch";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const url = "http:/localhost3000/products/" + id;
  const { data: product } = useFetch(url);

  if(!product) return 

  return <div>
    <p>ID do produto:{id}</p>
    <div>
        <h1>{product.name}</h1>
        <p>R${product.price}</p>
    </div>
  </div>;
};

export default Product;
