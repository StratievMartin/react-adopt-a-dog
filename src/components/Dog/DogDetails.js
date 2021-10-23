import { useParams } from "react-router"
import { useState, useEffect } from "react";

const DogDetails = () =>{
  const {id} = useParams();
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [dogData, setDogData] = useState([]);
  
  //service
  useEffect(() => {
    fetch(`http://localhost:5000/dogBreeds/${id}`)
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
      <div>
        <h1>{dogData.breed}</h1>
        <h1>{dogData.location}</h1>
        <h1>{dogData.temperament}</h1>
        <img src={dogData.img} alt="img" />
      </div>
    )}
  // return (
  //   <div>Dog details - {id}</div>
  // )
}
export default DogDetails