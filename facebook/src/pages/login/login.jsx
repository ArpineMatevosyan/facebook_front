import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginData } from "../../constants/login";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { AuthAPI } from "../../services/auth/slice";

import styles from "./login.module.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = handleSubmit((data) => {
    dispatch(AuthAPI.postLogin(data));
    //navigate("/account");
  });

  return (
    <div className={styles.login}>
      {/* <span className={styles.error}>{error}</span> */}
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
      <Link to="/register">Create a new account</Link>
    </div>
  );
};

export default Login;
