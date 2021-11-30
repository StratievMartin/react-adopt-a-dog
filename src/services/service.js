import { useState, useEffect } from "react";

const useService = (url) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        return res.json();
      })
      .then(
        (res) => {
          setIsLoaded(true);
          setData(res);
          setError(null);
        },
        (error) => {
          if (error.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsLoaded(true);
            setError(error);
          }
        }
      );
    return () => abortCont.abort();
  }, [url]);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  } else {
    return { data };
  }
};
export default useService;
