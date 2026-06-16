import React from "react";
import { useFetch } from "../hooks/UseFetch";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const url = "http:/localhost3000/products/" + id;
  const {dta}
  return <div>Product</div>;
};

export default Product;
