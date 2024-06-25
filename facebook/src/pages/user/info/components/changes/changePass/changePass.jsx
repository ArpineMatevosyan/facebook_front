import Input from "../../../../../../components/input/input";
import MainButton from "../../../../../../components/button/button";
import { useForm } from "react-hook-form";
import { AuthAPI } from "../../../../../../services/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePassData } from "../../../../../../constants/changePassData";
import { isChangePassStatus } from "../../../../../../store/auth/slice";

import styles from "./changePass.module.scss";
import { useEffect } from "react";

const ChangePass = () => {
  const { changePassStatus } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      current_password: "",
      new_password: "",
      new_password_confirmation: "",
    },
  });

  useEffect(() => {
    if (changePassStatus) {
      dispatch(isChangePassStatus());
      navigate("/account");
    }
  }, [changePassStatus, navigate]);

  const onChange = handleSubmit((data) => {
    dispatch(AuthAPI.putChangePass(data));
  });

  return (
    <div className={styles.box}>
      {changePassData?.map((inp, idx) => (
        <Input
          key={idx}
          name={inp.name}
          placeholder={inp.placeholder}
          type={inp.type}
          control={control}
        />
      ))}

      <MainButton onClick={onChange}>Change password</MainButton>
    </div>
  );
};

export default ChangePass;
