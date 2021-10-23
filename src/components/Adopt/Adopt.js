import { useState, useEffect } from "react";
import style from "./Adopt.module.css";
// import DogAvatar from './DogAvatar';
// import DogDesc from './DogDesc';
import Dogs from "./Dogs";

const Adopt = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dogData, setDogData] = useState([]);

  //service
  useEffect(() => {
    fetch("http://localhost:5000/dogBreeds")
      .then((res) => res.json())
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
          <Dogs data={dogData}></Dogs>
        </div>
      </div>
    );
  }
};
export default Adopt;
