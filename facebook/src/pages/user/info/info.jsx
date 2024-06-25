import { Link } from "react-router-dom";
import ChangeInfo from "./components/changes/changeInfo/changeInfo";

import styles from "./info.module.scss";
import ChangePass from "./components/changes/changePass/changePass";

const Info = () => {
  return (
    <div className={styles.container}>
      <p>Now you can change your information and password</p>
      <ChangeInfo className={styles.change} />
      <ChangePass className={styles.change} />
    </div>
  );
};

export default Info;
