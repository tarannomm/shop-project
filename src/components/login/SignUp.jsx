import React, { useEffect, useState } from "react";
import styles from "../../styles/css/signUp,Login.module.css";
 
import { validate } from "./Validate";
import { notify } from "./toast";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [tuched, setTuched] = useState({});
  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    }
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const focusHandler = (event) => {
    setTuched({ ...tuched, [event.target.name]: true });
  };

  useEffect(() => {
    setErrors(validate(data, "signUp"));
    console.log(errors);
  }, [data, tuched]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("success");
    } else {
      setTuched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
      notify("error");
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={submitHandler}>
        <h2>Sign Up</h2>
        <div className={styles.name}>
          <label htmlFor="name">Name</label>
          <input
           className={(errors.name && tuched.name)?styles.uncompleted:styles.completed}
            type="text"
            name="name"
            value={data.name}
            onFocus={focusHandler}
            onChange={changeHandler}
          />
          {errors.name && tuched.name && <span>{errors.name}</span>}
        </div>
        <div className={styles.email}>
          <label htmlFor="email">Email</label>
          <input
           className={(errors.email && tuched.email)?styles.uncompleted:styles.completed}
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
        <div className={styles.confirmPassword}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
           className={(errors.confirmPassword && tuched.confirmPassword)?styles.uncompleted:styles.completed}
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onFocus={focusHandler}
            onChange={changeHandler}
          />
          {errors.confirmPassword && tuched.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div className={styles.accepting}>
          <div>
            <label htmlFor="isAccepted">I accept terms of policy privacy</label>
            <input
              type="checkbox"
              name="isAccepted"
              value={data.isAccepted}
              onFocus={focusHandler}
              onChange={changeHandler}
            />
          </div>
          <div>
            {errors.isAccepted && tuched.isAccepted && (
              <span>{errors.isAccepted}</span>
            )}
          </div>
        </div>
        <div className={styles.buttons}>
          <Link to="/login">Login</Link>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
