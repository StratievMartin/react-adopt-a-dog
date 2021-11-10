import { useState } from "react";
import { useHistory } from "react-router";
import style from "./Form.module.css";
const Login = () => {
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const loginHandler = (e) => {
    e.preventDefault();
    const logData = { username, password };
    
    setIsPending(true);
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(logData),
    }).then(() => {
      console.log("just logged");
      setIsPending(false)
      history.push("/");
    });
  };
  return (
    <form className={style.authForm}>
      <div>
        <h2 className={style.authHeading}>Login</h2>
        <div className={style.field}>
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
        {!isPending && (
          <button onClick={loginHandler} className={style.formActionBtn}>
            Login
          </button>
        )}
        {isPending && (
          <button disabled className={style.formActionBtn}>
            Loading...
          </button>
        )}
      </div>
    </form>
  );
};
export default Login;
