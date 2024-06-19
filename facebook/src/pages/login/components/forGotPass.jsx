import { useForm } from "react-hook-form";
import Input from "../../../components/input/input";
import MainButton from "../../../components/button/button";
import { AuthAPI } from "../../../services/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ForgotPass = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
    },
  });
  const onSend = handleSubmit((email) => {
    dispatch(AuthAPI.postForGotPass(email));
    navigate("/");
  });
  return (
    <div>
      <Input control={control} name="email" type="email" placeholder="email" />
      <MainButton onClick={onSend}>Send</MainButton>
    </div>
  );
};

export default ForgotPass;
