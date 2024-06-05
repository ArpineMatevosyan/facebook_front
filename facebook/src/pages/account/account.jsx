import React from "react";

import styles from "./account.module.scss";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className={styles.accountContainer}>
      <div className={styles.account}>
        <div className={styles.personalInfo}>
          <img src="./images/personal_info.jpg" alt="user image"></img>
          <Link to="/user">Arpine Matevosyan</Link>
        </div>
        <p>Tariq</p>
        <p>ashxatanq</p>
        <p>info</p>
      </div>
      <div className={styles.news}>news</div>
      <div className={styles.friends}>
        <a>
          friends
          <img src="./images/personal_info.jpg" alt="user image"></img>
        </a>
        <a>
          friends
          <img src="./images/personal_info.jpg" alt="user image"></img>
        </a>
        <a>
          friends
          <img src="./images/personal_info.jpg" alt="user image"></img>
        </a>
        <a>
          friends
          <img src="./images/personal_info.jpg" alt="user image"></img>
        </a>
        <a>
          friends
          <img src="./images/personal_info.jpg" alt="user image"></img>
        </a>
      </div>
    </div>
  );
};

export default Account;
