import { NavLink } from "react-router-dom";
import style from "./Profile.module.css";
const Profile = (user) => {
  return (
    <div>
      {user.props ? (
        <div className={style.myPets}>
          <h2 className={style.header}>My Dogs</h2>
          <div className={style.adoptContainer}>
            <ul>
              <li>asd</li>
              <li>asd</li>
            </ul>
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
