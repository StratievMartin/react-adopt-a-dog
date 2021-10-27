import { useState, useEffect } from "react";

const useService = (url) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  const handleAdopt = (id) => {
    const newDogs = data.filter((el) => el.id !== id);
    setData(newDogs);
  };
  useEffect(() => {
    fetch(url)
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
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [url]);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  } else {
    return { data,handleAdopt };
  }
};
export default useService;
