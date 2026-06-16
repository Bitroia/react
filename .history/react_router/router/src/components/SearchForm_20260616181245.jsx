import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();
  return (
    <form>
      <input type="text" onChange={(e)} />
      <input type="submit" value="Buscar" />
    </form>
  );
};

export default SearchForm;
