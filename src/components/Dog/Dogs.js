import { Link } from "react-router-dom";
import style from "../Adopt/Adopt.module.css";
import DogAvatar from "./DogAvatar";
import DogDesc from "./DogDesc";

const Dogs = ({dogData,setDogData}) => {
  // const dogData = props.data;
  const handleAdopt = (id) => {
    const newDogs = dogData.filter((el) => el.id !== id);
    setDogData(newDogs);
  };
  return (
    <div>
      <ul className={style.dogs}>
        {dogData.map((el) => {
          return (
            <div>
              <li className={style.dogCard} key={el.id}>
              <DogAvatar props={el}></DogAvatar>
              <DogDesc props={el} />
              <button
                className={style.adoptBtn}
                onClick={()=>handleAdopt(el.id)}
              >
                Adopt
              </button>
              <Link to ={`/adopt/${el.id}`} className={style.readMore}>
                Read more
              </Link>
            </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default Dogs;
