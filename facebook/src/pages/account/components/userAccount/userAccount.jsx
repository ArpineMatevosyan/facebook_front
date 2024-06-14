import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserInfo } from "../../../../services/userInfo/slice";

import styles from "./userAccount.module.scss";

const UserAccount = () => {
  const { userInfo } = useSelector((state) => state.userInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo());
  }, []);
  return (
    <div className={styles.userAccount}>
      <div className={styles.personalInfo}>
        {/* /  <img src="./images/personal_info.jpg" alt="user image"></img> */}
        <Link to="/user">{userInfo?.name + " " + userInfo?.surname}</Link>
        {userInfo?.images[0] ? (
          <img src={`http://192.168.2.208:8000${userInfo?.images[0]?.path}`} />
        ) : (
          ""
        )}
      </div>
      <p>Birth date {userInfo?.birth_date}</p>
      <p>Phone number {userInfo?.phone}</p>
    </div>
  );
};

export default UserAccount;
