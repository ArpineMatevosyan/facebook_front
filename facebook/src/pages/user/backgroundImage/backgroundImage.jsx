import { useSelector } from "react-redux";

import styles from "./backgroundImage.module.scss";

const BackgroundImage = () => {
  const { userInfo } = useSelector((state) => state.user);

  const bgImage = userInfo?.images?.find((item) => item.bg_image === 1);
  const backgroundImageUrl = bgImage
    ? `http://192.168.2.208:8000${bgImage.path}`
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsaRe2zqH_BBicvUorUseeTaE4kxPL2FmOQ&s";

  return (
    <div className={styles.mainTop}>
      <img src={backgroundImageUrl} />
    </div>
  );
};

export default BackgroundImage;
