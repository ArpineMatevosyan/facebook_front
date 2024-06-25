import { IoIosPersonAdd } from "react-icons/io";
import MainButton from "../../button/button";
import { useDispatch } from "react-redux";
import { UserInfoAPI } from "../../../services/user";

const SendFriend = ({ id }) => {
  const dispatch = useDispatch();
  const sendFriend = (id) => {
    dispatch(UserInfoAPI.postSendFriend(id));
  };

  return (
    <MainButton variant="outlander" onClick={() => sendFriend(id)}>
      <IoIosPersonAdd />
    </MainButton>
  );
};

export default SendFriend;
