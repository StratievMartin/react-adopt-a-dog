import { useState } from "react";
import style from "./Form.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../utils/firebase'
const Register = () => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth,email,password);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  // const login = async () => {};
  // const logout = async () => {};

  // const registerHandler = (e) => {
  //   e.preventDefault();
  //   console.log("Register");
  //   console.log(email, password);
  // };
  return (
    <form className={style.authForm}>
      <div>
        <h2 className={style.authHeading}>Register</h2>
        <div className="field">
          <label htmlFor="email">Email </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
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
      </div>
    </form>
  );
};
export default Register;
