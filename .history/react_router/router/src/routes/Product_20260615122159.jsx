import React from "react";
import { useFetch } from "../hooks/UseFetch";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const url = "http"
  return <div>Product</div>;
};

export default Product;
