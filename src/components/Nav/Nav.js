import style from './Nav.module.css'
import { NavLink } from 'react-router-dom';
// import Home from '../Home/Home';
// import Profile from '../Profile/Profile';
// import Adopt from '../Adopt/Adopt';
const Nav = () => {
    return (
        <nav className={style.nav}>
            <div className={style.navLogo}>
                <h1>
                    <NavLink
                        className={style.navLinks}
                        to='/'>
                        Adopt A Dog
                    </NavLink>
                </h1>
            </div>
            <div className={style.navItems}>
                <ul>
                    <li>
                        <NavLink to="/adopt"
                            className={style.adopt}>
                            Adopt
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={style.navLinks}
                            to="/profile">
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={style.navLinks}
                            to="/login">
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={style.navLinks}
                            to="/register">
                            Register
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={style.navLinks}
                            to="/">
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav;