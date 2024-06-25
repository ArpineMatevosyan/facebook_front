import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MainImage from "./components/mainImage";
import LogOut from "../logOut/logOut";

import clsx from "clsx";
import styles from "./userFace.module.scss";

const UserFace = ({ className = "", show = false }) => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <div className={clsx(styles.userFace, className)}>
      <div className={styles.userName}>
        <Link to="/user">{userInfo?.name + " " + userInfo?.surname}</Link>
        <LogOut show={show} />
      </div>
      <MainImage />
    </div>
  );
};

export default UserFace;
