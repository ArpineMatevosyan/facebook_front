import Input from "../../components/input/input";
import Button from "../../components/button/button";
import { registerData } from "../../constants/register";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { schema } from "./validation/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import MainDate from "../../components/datePicker/mainDate";
import { AuthAPI } from "../../services/auth/slice";

import styles from "./register.module.scss";

const Register = () => {
  // const { createName, createPassword, repeatPassword } = useSelector(
  //   (state) => state.auth
  // );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      birth_date: "",
      password: "",
      confirm_password: "",
    },
    // resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    dispatch(AuthAPI.postRegister(data));
    navigate("/login");
  });
  return (
    <div className={styles.register}>
      {registerData?.map((inp, idx) => (
        <div key={idx}>
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
      {/* <MainDate control={control} name="birthday" /> */}
      <Button variant="contained" onClick={onSubmit}>
        REGISTER
      </Button>
    </div>
  );
};

export default Register;
