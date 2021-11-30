import { useState } from "react";
import { createDog } from "../../utils/functions";
import { useHistory } from "react-router";
import style from "../Auth/Form.module.css";
const CreatePet = () => {
  const [dogName, setdogName] = useState([]);
  const [breed, setBreed] = useState([]);
  const [info, setInfo] = useState([]);
  const [location, setLocation] = useState([]);
  const [img, setImg] = useState([]);
  const history = useHistory();

  const onCreate = (e) => {
    e.preventDefault();
  };
  return (
    <form className={style.authForm} onSubmit={onCreate}>
      <div>
        <h2 className={style.authHeading}>Add Dog</h2>
        <div className="field">
          <label htmlFor="dogName">Name</label>
          <input
            type="text"
            name="dogName"
            id="dogName"
            placeholder="Name"
            value={dogName}
            onChange={(e) => setdogName(e.target.value)}
          ></input>
        </div>
        <div className="field">
          <label htmlFor="breed">Breed</label>
          <input
            type="text"
            name="breed"
            id="breed"
            placeholder="Breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          ></input>
        </div>
        <div className="field">
          <label htmlFor="breed">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </div>
        <div className="field">
          <label htmlFor="img">Img address</label>
          <input
            type="text"
            name="img"
            id="img"
            placeholder="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          ></input>
        </div>
        <div className="field">
          <label htmlFor="info">Info</label>
          <textarea
            name="info"
            id="info"
            cols="30"
            rows="10"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            placeholder="More information about the dog"
          ></textarea>
        </div>
        <button
          onClick={() => {
            createDog(dogName, breed, location, info, img)
            .then(() => {
              history.push("/adopt");
            });
          }}
          className={style.formActionBtn}
        >
          Create
        </button>
      </div>
    </form>
  );
};
export default CreatePet;
