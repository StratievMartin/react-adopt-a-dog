import style from "./Form.module.css";
const Login = () => {
  const loginHandler = (e)=>{
    e.preventDefault();
  }
  return (
    <form className="authForm">
        <h4 className={style.authHeading}>Login</h4>
        <div className="field">
          <label for="username">Username </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          ></input>
        </div>
        <div className="field">
          <label for="password">Password </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          ></input>
        </div>
        <button className={style.formActionBtn}>Login</button>
    </form>
  );
};
export default Login;
