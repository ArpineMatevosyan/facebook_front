import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginData } from "../../constants/login";
import Input from "../../components/input/input";
import MainButton from "../../components/button/button";
import { AuthAPI } from "../../services/auth";

import styles from "./login.module.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signIn } = useSelector((state) => state.auth);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = handleSubmit((data) => {
    dispatch(AuthAPI.postLogin(data));
    if (signIn) {
      navigate("/account");
    }
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
      <MainButton variant="outlined" onClick={onSubmit} disabled>
        Login
      </MainButton>
      <Link to="/register">Create a new account</Link>
      <Link to="/forGotPass">Forgot password?</Link>
    </div>
  );
};

export default Login;
