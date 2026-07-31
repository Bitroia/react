import React from "react";
import { useEffect, useState } from "react";

const List = ({ getItems }) => {
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    console.log("Buscando os dados");

    setMyItems(getItems);
  }, getItems);

  return <div>
    {myItems && myItems.map((item) => <p key={i}>
    </p>)}
  </div>;
};

export default List;
