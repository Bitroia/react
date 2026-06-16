import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery]
  return (
    <form>
      <input type="text" />
      <input type="submit" value="Buscar" />
    </form>
  );
};

export default SearchForm;
