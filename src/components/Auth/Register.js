import style from "./Form.module.css";
const Register = () => {
  

  return (
    <form className="authForm">
        <h4 className={style.authHeading}>Register</h4>
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
        <button className={style.formActionBtn}>Register</button>
    </form>
  );
};
export default Register;
