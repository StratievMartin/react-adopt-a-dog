import { useState } from "react";
import style from "./Form.module.css";
import { signInWithEmailAndPassword, 
  // onAuthStateChanged 
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  // const [user, setUser] = useState({});

  const history = useHistory();
  // onAuthStateChanged(auth, (user) => {
  //   setUser(user);
  // });
  const onLog = (e) =>{
    e.preventDefault();
  }

  const login = async (e) => {
    try {
      // e.preventDefault();
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      history.push("/adopt");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={style.authForm} onSubmit={onLog}>
      <div>
        <h2 className={style.authHeading}>Login</h2>
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
        <button onClick={login} className={style.formActionBtn}>
          Login
        </button>
        <p>
          Need an account? <Link to="/register">Register here.</Link>
        </p>
      </div>
    </form>
  );
};
export default Login;
