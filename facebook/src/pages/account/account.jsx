import React from "react";
import UserAccount from "./components/userAccount/userAccount";
import UserNews from "./components/userNews/userNews";
import UserFriends from "./components/userFriends/userFriends";

import styles from "./account.module.scss";

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
