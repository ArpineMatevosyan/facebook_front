import MainButton from "../../button/button";
import { UserInfoAPI } from "../../../services/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import styles from "./requestFriends.module.scss";

const RequestFriends = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { friendsRequest } = useSelector((state) => state.user);
  const handleClick = () => {
    setShow(!show);
  };
  useEffect(() => {
    return () => {
      dispatch(UserInfoAPI.getFriends());
    };
  }, [dispatch]);

  return (
    <div className={styles.requestContainer}>
      <MainButton onClick={handleClick}>
        Friend Request {friendsRequest.length}
      </MainButton>
      <div className={styles.box}>
        {show &&
          friendsRequest.map((request, idx) => (
            <div className={styles.boxItem} key={idx}>
              <img
                src={"http://192.168.2.208:8000" + request.sender.main_image}
              />
              <span> {request.sender.name}</span>
              <span> {request.sender.surname}</span>
              <MainButton>Add</MainButton>
              <MainButton>Cancel</MainButton>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RequestFriends;
