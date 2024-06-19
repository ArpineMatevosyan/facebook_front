import React from "react";
import { friendsData } from "./data";

import styles from "./userFriends.module.scss";
import { Link } from "react-router-dom";

const UserFriends = () => {
  return (
    <div className={styles.userFriends}>
      {friendsData
        ? friendsData.map((friend, idx) => (
            <Link key={idx}>
              <span>
                {friend.name} {friend.lastName}
              </span>
              <img src={friend.imgSrc} alt="user image"></img>
            </Link>
          ))
        : ""}
    </div>
  );
};

export default UserFriends;
