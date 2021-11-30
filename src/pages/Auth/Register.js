import { useState } from "react";
import style from "./Form.module.css";
import {
  createUserWithEmailAndPassword,
  // onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { Link,useHistory } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  // const [user, setUser] = useState({});

  const history = useHistory();
  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });
  const onReg = (e) =>{
    e.preventDefault();
  }
  const register = async (e) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      history.push('/adopt');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form className={style.authForm} onSubmit={onReg}>
      <div>
        <h2 className={style.authHeading}>Register</h2>
        <div className="field">
          <label htmlFor="email">Email </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="field">
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button onClick={register} className={style.formActionBtn}>
          Register
        </button>
        <p>Already have an account? <Link to="/login">Login here.</Link></p>
      </div>
    </form>
  );
};
export default Register;
