import { useState } from "react";
import { createDog } from "../../utils/functions";
import { useHistory } from "react-router";
import style from "../Auth/Form.module.css";
const CreatePet = () => {
  const [breed, setBreed] = useState([]);
  const [description, setDescription] = useState([]);
  const [location, setLocation] = useState([]);
  const [img, setImg] = useState([]);
  const history = useHistory();

  const onCreate = (e) => {
    e.preventDefault();
  };
  const checkForm =() =>{
    
  }
  return (
    <form className={style.authForm} onSubmit={onCreate}>
      <div>
        <h2 className={style.authHeading}>Add Dog</h2>
        <div className="field">
          <label htmlFor="breed"></label>
          <input
            type="text"
            name="breed"
            id="breed"
            placeholder="Breed"
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
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Dog description..."
          ></textarea>
        </div>
        <button
          onClick={() => {
            createDog(breed, location, description, img).then(() => {
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
