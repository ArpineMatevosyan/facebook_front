import Input from "../../components/input/input";
import MainButton from "../../components/button/button";
import { registerData } from "../../constants/register";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { schema } from "./validation/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import MainDate from "../../components/datePicker/mainDate";
import { AuthAPI } from "../../services/auth/slice";
import dayjs from "dayjs";

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
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    const formattedBirthDate = data.birth_date
      ? dayjs(data.birth_date).format("YYYY-MM-DD")
      : "";
    const formData = { ...data, birth_date: formattedBirthDate };
    dispatch(AuthAPI.postRegister(formData));
    navigate("/login");
  });
  return (
    <div className={styles.register}>
      {registerData?.map((inp, idx) => (
        <div key={idx}>
          {inp.name === "birth_date" ? (
            <MainDate control={control} name={inp.name} label={inp.label} />
          ) : (
            <Input
              key={idx}
              type={inp.type}
              name={inp.name}
              placeholder={inp.placeholder}
              className={styles.inp}
              control={control}
            />
          )}
          {errors && errors[inp.name] && (
            <p className={styles.error}>{errors[inp.name].message}</p>
          )}
        </div>
      ))}
      {/* <MainDate control={control} name="birth_date" label="Birth Date" /> */}
      <MainButton variant="contained" onClick={onSubmit}>
        REGISTER
      </MainButton>
    </div>
  );
};

export default Register;
