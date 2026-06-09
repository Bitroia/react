import { useState, useEffect } from "react";

//! custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // ! refatorando post

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(null);

  //! Loading 

  const httpConfig = (data, method) => {
    if (method == "POST") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod(method);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();

        setData(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url, callFetch]);
  //! refatorando post

  useEffect(() => {
    const httpRequest = async () => {
      try {
        let json;

        if (method === "POST") {
          const res = await fetch(url, config);
          json = await res.json();
        }

        setCallFetch(json);
      } catch (error) {
        console.log(error);
      }
    };
    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig };
};
