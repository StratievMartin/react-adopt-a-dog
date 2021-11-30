import { NavLink } from "react-router-dom";
import Dogs from "../../components/DogCard/Dogs";
import useService from "../../services/service";
import style from "./Profile.module.css";

const Profile = (user) => {
  const { data: dogData } = useService("http://localhost:5000/adopted_dogs");
  return (
    <div className={style.flex}>
      {user.props ? (
        <div className={style.myPets}>
          <h2 className={style.header}>My Dogs</h2>
          <div className={style.adoptContainer}>
            <div className={style.flex}>
              {dogData &&
                dogData.map((data) => {
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
      ) : (
        <NavLink to="/login">
          <h2>Please Log in first</h2>
        </NavLink>
      )}
    </div>
  );
};
export default Profile;
