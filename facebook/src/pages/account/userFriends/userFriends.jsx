import React from "react";
import { friendsData } from "./data";

import styles from "./userFriends.module.scss";

const UserFriends = () => {
  return (
    <div className={styles.userFriends}>
      {friendsData
        ? friendsData.map((friend, idx) => (
            <a key={idx}>
              <span>
                {friend.name} {friend.lastName}
              </span>
              <img src={friend.imgSrc} alt="user image"></img>
            </a>
          ))
        : ""}
    </div>
  );
};

export default UserFriends;
