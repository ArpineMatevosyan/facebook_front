import { useForm } from "react-hook-form";
import Input from "../../../components/input/input";
import MainButton from "../../../components/button/button";
import { AuthAPI } from "../../../services/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Verify = () => {
  const { verifyEmail, verify } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: verifyEmail,
      verification_code: "",
    },
  });
  const onSend = handleSubmit((code) => {
    dispatch(AuthAPI.postVerify(code));
  });
  useEffect(() => {
    if (verify) {
      navigate("/");
    }
  }, [verify]);

  return (
    <div>
      <Input
        name="verification_code"
        type="number"
        placeholder="Code"
        control={control}
      />
      <MainButton variant="outlined" onClick={onSend}>
        Send
      </MainButton>
    </div>
  );
};

export default Verify;
