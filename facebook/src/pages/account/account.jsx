import React from "react";

import styles from "./account.module.scss";
import UserAccount from "./components/userAccount/userAccount";
import UserNews from "./userNews/userNews";
import UserFriends from "./userFriends/userFriends";

const Account = () => {
  return (
    <div className={styles.accountContainer}>
      <UserAccount />
      <UserNews />
      <UserFriends />
    </div>
  );
};

export default Account;
