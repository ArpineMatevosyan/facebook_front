import Input from "../../../../components/input/input";
import MainButton from "../../../../components/button/button";
import { useForm } from "react-hook-form";
import { AuthAPI } from "../../../../services/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePassData } from "../../../../constants/changePassData";

const ChangePass = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      current_password: "",
      new_password: "",
      new_password_confirmation: "",
    },
  });

  const onChange = handleSubmit((data) => {
    console.log(data);
    dispatch(AuthAPI.putChangePass(data));
    navigate("/");
  });

  return (
    <div>
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
