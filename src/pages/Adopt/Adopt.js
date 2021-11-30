import style from "./Adopt.module.css";
import Dogs from "../../components/DogCard/Dogs";
import useService from "../../services/service";
import { useState } from "react";

const Adopt = () => {
  const { data: dogData } = useService("http://localhost:5000/dog_breeds");
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className={style.adopt}>
      <h2 className={style.header}>Available for adoption</h2>
      <div className={style.adoptContainer}>
        <div className={style.search}>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
        <div className={style.flex}>
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
                  <Dogs
                    dogData={data}
                    key={data.id}
                    className={style.flex}
                  ></Dogs>
                );
              })}
        </div>
      </div>
    </div>
  );
};
export default Adopt;
