import React from "react";
import { newsData } from "./newsData";
import Like from "../like/like";
import Comment from "../comment/comment";

import styles from "./news.module.scss";
import StringControl from "../stringControl/stringControl";

const News = () => {
  return (
    <div>
      {newsData
        ? newsData.map((data, id) => (
            <div key={id} className={styles.container}>
              <div className={styles.news}>
                <h2 className={styles.author}>{data.author}</h2>
                <div className={styles.description}>
                  <StringControl string={data.description} />
                </div>
                <div className={styles.action}>
                  <Like />
                  <Comment />
                </div>
              </div>
            </div>
          ))
        : "No news yet"}
    </div>
  );
};

export default News;
