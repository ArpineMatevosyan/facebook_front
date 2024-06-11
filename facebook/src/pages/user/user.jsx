import React from "react";

import styles from "./user.module.scss";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className={styles.userContainer}>
      <div className={styles.user}></div>
      <div className={styles.linkContainer}>
        <Link to="/images">Images</Link>
        <Link to="/info">Information</Link>
        <Link to="/news">Create News</Link>
      </div>
    </div>
  );
};

export default User;
