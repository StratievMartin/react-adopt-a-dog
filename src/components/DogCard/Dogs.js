import { Link } from "react-router-dom";
import style from "./Dogs.module.css";
import DogAvatar from "./DogInfo/DogAvatar";
import DogDesc from "./DogInfo/DogDesc";
import { adoptDog, deleteDog } from "../../utils/functions";

const Dogs = (singleDog) => {
  const dog = singleDog.dogData;
  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <ul className={style.dogs}>
      <div key={dog.id}>
        <li className={style.dogCard}>
          <Link to={`/update/${dog.id}`} className={style.update}>
            Edit
          </Link>
          <button
            className={style.deleteButton}
            onClick={() => {
              deleteDog(dog.id).then(() => refreshPage());
            }}
          >
            x
          </button>
          <DogAvatar props={dog}></DogAvatar>
          <DogDesc props={dog} />
          <button
            className={style.adoptBtn}
            onClick={() => {
              console.log(dog)
              adoptDog(dog).then(() => {
                deleteDog(dog.id)
                refreshPage()
              });
            }}
          >
            Adopt
          </button>
          <Link to={`/adopt/${dog.id}`} className={style.readMore}>
            Read more
          </Link>
        </li>
      </div>
    </ul>
  );
};
export default Dogs;
