import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useService from "../../services/service";
import style from "./DogDetails.module.css";

const DogDetails = () => {
  const { id } = useParams();
  const { data: dogData } = useService(`http://localhost:5000/dogBreeds/${id}`);
  return (
    <div>
      <div className={style.backButtonContainer}>
        <Link className={style.backButton} to={"/adopt"}>
          Go Back
        </Link>
      </div>
      <div className={style.dogDataContainer}>
        <img src={dogData && dogData.img} alt="img" />
        <div className={style.dogInfo}>
          <h1>{dogData && dogData.breed}</h1>
          <p>
            <strong>Location</strong> {dogData && dogData.location}
          </p>
          <p>
            <strong>Temperament</strong>
            {dogData && dogData.temperament}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            amet, consectetur repellendus quaerat dolorem labore fugit
            voluptatibus! Ex, porro aperiam? Velit deleniti molestias cupiditate
            non nisi laboriosam ab temporibus repellat?
          </p>
        </div>
      </div>
    </div>
  );
};
// }
export default DogDetails;
