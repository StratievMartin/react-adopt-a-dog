import { useState, useEffect } from "react";
import style from "./Adopt.module.css";
import Dogs from "../Dog/Dogs"

const Adopt = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dogData, setDogData] = useState([]);
  
  //service
  useEffect(() => {
    fetch("http://localhost:5000/dogBreeds")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data");
        }
        return res.json();
      })
      .then(
        (res) => {
          setIsLoaded(true);
          setDogData(res);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  } else {
    return (
      <div className={style.adopt}>
        <h2 className={style.header}>Available for adoption</h2>
        <div className={style.adoptContainer}>
          <Dogs dogData={dogData} setDogData={setDogData}></Dogs>
          {/* <hr /> 
          <h2>Dogs in Germany</h2>
          <Dogs
            dogData={dogData.filter(
              (dogData) => dogData.location === "Germany"
            )}
          ></Dogs> */}
        </div>
      </div>
    );
  }
};
export default Adopt;
