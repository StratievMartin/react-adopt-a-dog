import { Link } from "react-router-dom";
import style from "./Dogs.module.css";
import DogAvatar from "./DogInfo/DogAvatar";
import DogDesc from "./DogInfo/DogDesc";
import { deleteDog } from "../../utils/functions";

const Dogs = (singleDog) => {
  const dog = singleDog.dogData;
  const refreshPage = () => {
    window.location.reload(false);
  };
  return (
    <div>
      <ul className={style.dogs}>
        <div key={dog.id}>
          <li className={style.dogCard}>
            <DogAvatar props={dog}></DogAvatar>
            <DogDesc props={dog} />
            <button
              className={style.adoptBtn}
              // onClick={() => handleAdopt(dog.id)}
            >
              Adopt
            </button>
            <Link to={`/adopt/${dog.id}`} className={style.readMore}>
              Read more
            </Link>
            <div>
              <Link to={`/update/${dog.id}`}>Edit</Link>
              <button
                className={style.readMore}
                onClick={() => {
                  deleteDog(dog.id).then(() => refreshPage());
                }}
              >
                x
              </button>
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
};
export default Dogs;

{
  /* <ul className={style.dogs}>
        {dogData &&
          dogData.map((el) => {
            return (
              <div key={el.id}>
                <li className={style.dogCard}>
                  <DogAvatar props={el}></DogAvatar>
                  <DogDesc props={el} />
                  <button
                    className={style.adoptBtn}
                    onClick={() => handleAdopt(el.id)}
                  >
                    Adopt
                  </button>
                  <Link to={`/adopt/${el.id}`} className={style.readMore}>
                    Read more
                  </Link>
                </li>
              </div>
            );
          })}
      </ul> */
}
