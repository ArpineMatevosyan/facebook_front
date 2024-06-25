import React from "react";
import UserAccount from "./components/userAccount/userAccount";
import UserNews from "./components/userNews/userNews";
import UserFriends from "./components/userFriends/userFriends";
import Search from "../../components/search/search";
import BackgroundImage from "../user/backgroundImage/backgroundImage";
import UserFace from "../../components/userFace/userFace";
import Header from "../../components/header/header";
import { Link } from "react-router-dom";
import MainButton from "../../components/button/button";

import styles from "./account.module.scss";
import clsx from "clsx";

const Account = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Header />
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <Search />
          <UserFace show={true} />
        </div>
        <div className={styles.backgroundImage}>
          <BackgroundImage />
          <div className={styles.backgroundImageBottom}>
            <div className={styles.backgroundImageBottomLeft}>
              <UserFace className={styles.main} />
            </div>
            <div className={styles.backgroundImageBottomRight}>
              <div className={styles.message}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="message" clip-path="url(#clip0_8_35)">
                    <path
                      id="Vector"
                      d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM18 14H6V12H18V14ZM18 11H6V9H18V11ZM18 8H6V6H18V8Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_35">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <MainButton>Add freind</MainButton>
              <MainButton>Block</MainButton>
            </div>
          </div>
        </div>
        <div className={styles.accountContainer}>
          <UserAccount />
          <div className={styles.accountNews}>
            <UserNews />
          </div>
          <UserFriends />
        </div>
      </div>
    </div>
  );
};

export default Account;
