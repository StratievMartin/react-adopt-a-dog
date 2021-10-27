import { useState } from "react";
import style from "./Form.module.css";
const Register = () => {
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);

  const registerHandler = (e) => {
    e.preventDefault();
    console.log("Register");
    console.log(username, password);
  };
  return (
    <form className={style.authForm}>
      <div>
        <h2 className={style.authHeading}>Register</h2>
        <div className="field">
          <label htmlFor="username">Username </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <button onClick={registerHandler} className={style.formActionBtn}>
          Register
        </button>
      </div>
    </form>
  );
};
export default Register;
