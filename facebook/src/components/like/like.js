import { SlLike } from "react-icons/sl";
import { useState } from "react";

import styles from "./like.module.scss";

const Like = () => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className={styles.likeContainer}>
      <SlLike
        className={`${styles.like} ${liked ? styles.liked : ""}`}
        onClick={toggleLike}
      />
    </div>
  );
};

export default Like;
