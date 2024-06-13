import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./userAccount.module.scss";

const UserAccount = () => {
  return (
    <div className={styles.userAccount}>
      <div className={styles.personalInfo}>
        {/* /  <img src="./images/personal_info.jpg" alt="user image"></img> */}
        <Link to="/user">
          {localStorage.getItem("name") + " " + localStorage.getItem("surname")}
        </Link>
      </div>
      <p>Tariq</p>
      <p>ashxatanq</p>
      <p>info</p>
    </div>
  );
};

export default UserAccount;
