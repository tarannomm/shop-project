import React, { useEffect, useState } from "react";
import styles from "../../styles/css/signUp,login.module.css";
import { validate } from "./Validate";
import { notify } from "./toast";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [tuched, setTuched] = useState({});
  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const focusHandler = (event) => {
    setTuched({ ...tuched, [event.target.name]: true });
  };

  useEffect(() => {
    setErrors(validate(data, "login"));
    console.log(errors);
  }, [data, tuched]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("success");
    } else {
      setTuched({ email: true, password: true });
      notify("error");
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={submitHandler}>
        <h2>Login</h2>

        <div className={styles.email}>
          <label htmlFor="email">Email</label>
          <input
            className={(errors.email&& tuched.email)?styles.uncompleted:styles.completed}
            type="text"
            name="email"
            value={data.email}
            onFocus={focusHandler}
            onChange={changeHandler}
          />
          {errors.email && tuched.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.password}>
          <label htmlFor="password">Password</label>
          <input
                     className={(errors.password && tuched.password)?styles.uncompleted:styles.completed}
            type="password"
            name="password"
            value={data.password}
            onFocus={focusHandler}
            onChange={changeHandler}
          />
          {errors.password && tuched.password && <span>{errors.password}</span>}
        </div>

        <div className={styles.buttons}>
          <Link to="/signUp">Sign Up</Link>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
