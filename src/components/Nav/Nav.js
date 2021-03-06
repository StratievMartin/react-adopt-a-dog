import style from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";

const Nav = (user) => {
  // const {currentUser} = auth();
  const history = useHistory();
  const logOut = async () => {
    await signOut(auth);
    history.push("/login");
  };
  return (
    <nav className={style.nav}>
      <div className={style.navLogo}>
        <h1>
          <NavLink className={style.navLinks} to="/">
            Adopt A Dog
          </NavLink>
        </h1>
      </div>
      <div className={style.navItems}>
        <ul>
          <li>
            <NavLink to="/adopt" className={style.adopt}>
              Adopt
            </NavLink>
          </li>
          <li>
            {/* if admin */}
            <NavLink to="/create" className={style.navLinks}>
              Add pet
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={style.navItems}>
        <ul>
          <li>
            <ul>
              {user.props ? (
                <li>
                  <NavLink className={style.navLinks} to="/profile">
                    {user.props.email}
                  </NavLink>
                  <button onClick={logOut} className={style.logOutBtn}>
                    Log out
                  </button>
                </li>
              ) : (
                <li>
                  <NavLink className={style.navLinks} to="/profile">
                    Profile
                  </NavLink>
                </li>
              )}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
