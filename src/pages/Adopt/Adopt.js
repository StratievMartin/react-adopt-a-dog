import style from "./Adopt.module.css";
import Dogs from "../../components/DogCard/Dogs";
import useService from "../../services/service";

const Adopt = () => {
  const { data: dogData } = useService("http://localhost:5000/dogBreeds");
  return (
    <div className={style.adopt}>
      <h2 className={style.header}>Available for adoption</h2>
      {/* <select name="" id="">
        <option value="All"></option>
        <option value="Germany"></option>
      </select> */}
      <div className={style.adoptContainer}>
        {dogData && <Dogs dogData={dogData}></Dogs>}
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
};
// };
export default Adopt;
