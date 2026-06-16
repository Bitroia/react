import React from "react";
import { useFetch } from "../hooks/UseFetch";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const url = "http:/localhost3000/products/" + id;
  const { data: product } = useFetch(url);
  return <div>
    <p></p>
  </div>;
};

export default Product;
