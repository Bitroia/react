import { useState, useEffect } from "react";

//! custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // ! refatorando post

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(null);

  //! Loading

  const [loading, setLoading] = useState(false);

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
      //! Loading
      setLoading(true);

      const res = await fetch(url);
      const json = await res.json();

      setLoading(false);

      setData(json);
    };
    fetchData();
  }, [url, callFetch]);
  //! refatorando post

  useEffect(() => {
    const httpRequest = async () => {
      let json;
      if (method === "POST") {
        //!Loading
        setLoading(true);

        const res = await fetch(url, config);
        json = await res.json();

        setLoading(false);
      }

      setCallFetch(json);
    };
    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig };
};
