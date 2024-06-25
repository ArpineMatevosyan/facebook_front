import { Link } from "react-router-dom";
import UserImages from "../../components/userImages/userImages";
import BackgroundImage from "./backgroundImage/backgroundImage";
//import MainImage from "../account/components/userAccount/components/mainImage";

import styles from "./user.module.scss";

const User = () => {
  return (
    <div className={styles.userContainer}>
      <BackgroundImage></BackgroundImage>
      {/* <MainImage className={styles.main} /> */}
      <div className={styles.user}></div>
      <div className={styles.linkContainer}>
        <Link to="/images">Images</Link>
        <Link to="/info">Information</Link>
        <Link to="/news">Create News</Link>
      </div>
      <UserImages isBack={true} />
    </div>
  );
};

export default User;
