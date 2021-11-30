import style from "./Adopt.module.css";
import Dogs from "../../components/DogCard/Dogs";
import useService from "../../services/service";
import { useState } from "react";

const Adopt = () => {
  const { data: dogData } = useService("http://localhost:5000/dogBreeds");
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className={style.adopt}>
      <h2 className={style.header}>Available for adoption</h2>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      {dogData &&
        dogData
          .filter((value) => {
            if (searchTerm === "") {
              return value;
            } else if (
              value.breed.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
          })
          .map((data) => {
            return (
              <div className={style.adoptContainer} key={data.id}>
                <Dogs dogData={data}></Dogs>
              </div>
            );
          })}
    </div>
  );
};
export default Adopt;


