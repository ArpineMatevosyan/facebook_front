import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isSignIn } from "../../store/auth/slice";

const LogOut = ({ show = false }) => {
  const { signIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(isSignIn(false));
    localStorage.removeItem("token");
    navigate("/");
  };

  return <>{signIn && show && <span onClick={handleLogOut}>Log out</span>}</>;
};

export default LogOut;
