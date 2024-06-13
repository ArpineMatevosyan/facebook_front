import News from "../../../components/news/news";

import styles from "./userNews.module.scss";

const UserNews = () => {
  return (
    <div className={styles.userNews}>
      <News />
    </div>
  );
};

export default UserNews;
