import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { registerData } from "../../constants/register";
import { useSelector, useDispatch } from "react-redux";
import {
  setCreateName,
  setCreatePassword,
  setRepeatPassword,
} from "../../store/auth/slice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { schema } from "./validation/validation";
import { yupResolver } from "@hookform/resolvers/yup";

import styles from "./register.module.scss";

const Register = () => {
  const { createName, createPassword, repeatPassword } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      password: "",
      repeatPass: "",
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    if (data.password !== data.repeatPass) return;
    localStorage.setItem("name", data.name);
    localStorage.setItem("pass", data.repeatPass);
    navigate("/");
    dispatch(setCreateName(data.name));
    dispatch(setCreatePassword(data.password));
    dispatch(setRepeatPassword(data.repeatPass));
  });
  return (
    <div className={styles.register}>
      {registerData?.map((inp, idx) => (
        <div>
          <Input
            key={idx}
            type={inp.type}
            name={inp.name}
            placeholder={inp.placeholder}
            className={styles.inp}
            control={control}
          />
          {errors && errors[inp.name] && (
            <p className={styles.error}>{errors[inp.name].message}</p>
          )}
        </div>
      ))}
      <Button variant="contained" onClick={onSubmit}>
        REGISTER
      </Button>
    </div>
  );
};

export default Register;
