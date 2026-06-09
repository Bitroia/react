import { useState, useEffect } from "react";

//! custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // ! refatorando post

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(null);

  const httpConfig = (data, method) =>{
    if (method == "POST"){
      setConfig({
        method, headers: {
          "Content-type":""
        }
      })
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();

      setData(json);
    };
    fetchData();
  }, [url]);

  return { data };
};
