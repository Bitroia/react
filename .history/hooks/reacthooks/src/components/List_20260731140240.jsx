import React from "react";
import { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    console.log("Buscando os dados");

    setMyItems(getItems);
  }, getItems);
  return <div>List</div>;
};

export default List;
