import style from "../Auth/Form.module.css";
import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { updateDog } from "../../utils/functions";
import useService from "../../services/service";
const UpdateDog = () => {
  const [breed, setBreed] = useState([]);
  const [description, setDescription] = useState([]);
  const [location, setLocation] = useState([]);
  const [img, setImg] = useState([]);
  const history = useHistory();
  const routeId = useParams().id;

  const onCreate = (e) => {
    e.preventDefault();
  };

  const { data: dogData } = useService(
    `http://localhost:5000/dogBreeds/${routeId}`
  );
  return (
    <div>
      {!dogData ? (
        "loading"
      ) : (
        <form className={style.authForm} onSubmit={onCreate}>
          <div>
            <h2 className={style.authHeading}>Edit Dog</h2>
            <div className="field">
              <label htmlFor="breed"></label>
              <input
                type="text"
                name="breed"
                id="breed"
                placeholder="Breed"
                defaultValue={dogData.breed}
                required
                onChange={(e) => setBreed(e.target.value)}
              ></input>
            </div>
            <div className="field">
              <label htmlFor="location"></label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Location"
                defaultValue={dogData.location}
                required
                onChange={(e) => setLocation(e.target.value)}
              ></input>
            </div>
            <div className="field">
              <label htmlFor="img"></label>
              <input
                type="text"
                name="img"
                id="img"
                placeholder="Img address"
                required
                defaultValue={dogData.img}
                onChange={(e) => setImg(e.target.value)}
              ></input>
            </div>
            <div className="field">
              <label htmlFor="description"></label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="5"
                required
                defaultValue={dogData.description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Dog description"
              ></textarea>
            </div>
            <button
              onClick={() => {
                updateDog(routeId, breed, location, description, img).then(
                  () => {
                    history.push("/adopt");
                  }
                );
              }}
              className={style.formActionBtn}
            >
              Update
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
export default UpdateDog;
