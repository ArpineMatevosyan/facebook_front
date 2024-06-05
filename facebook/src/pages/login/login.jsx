import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setName, setPassword, setSignIn } from "../../store/auth/slice";
import { loginData } from "../../constants/login";
import Input from "../../components/input/input";
import Button from "../../components/button/button";

import styles from "./login.module.scss";

const Login = () => {
  const { name, password, signIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      password: "",
    },
  });
  const onSubmit = handleSubmit((data) => {
    const name = localStorage.getItem("name");
    const pass = localStorage.getItem("pass");
    if (data.name === name && data.password === pass) {
      dispatch(setSignIn());
      dispatch(setName(data.name));
      navigate("/users");
    } else {
      setError("Wrong name or password");
    }
  });

  return (
    <div className={styles.login}>
      <span className={styles.error}>{error}</span>
      {loginData?.map((inp, idx) => (
        <Input
          key={idx}
          name={inp.name}
          type={inp.type}
          control={control}
          className={styles.inp}
          placeholder={inp.placeholder}
        />
      ))}
      <Button variant="outlined" onClick={onSubmit} disabled>
        Login
      </Button>
    </div>
  );
};

export default Login;
