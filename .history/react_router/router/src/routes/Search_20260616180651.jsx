import React from "react";
import { UseFetch } from "../hooks/UseFetch";

const url = "http://localhost:3000/products";

const Search = () => {
    const { data: items } = UseFetch(url);
  return <div>Search</div>;
};

export default Search;
