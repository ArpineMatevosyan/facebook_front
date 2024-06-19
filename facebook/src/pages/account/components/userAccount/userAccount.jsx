import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MainImage from "./components/mainImage";

import styles from "./userAccount.module.scss";

const UserAccount = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <div className={styles.userAccount}>
      <div className={styles.personalInfo}>
        <Link to="/user">{userInfo?.name + " " + userInfo?.surname}</Link>
        <MainImage />
      </div>
      <p>Birth date {userInfo?.birth_date}</p>
      <p>Phone number {userInfo?.phone}</p>
    </div>
  );
};

export default UserAccount;
