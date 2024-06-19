import { useEffect } from "react";
import MainButton from "../button/button";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImagesAPI } from "../../services/images";
import { UserInfoAPI } from "../../services/userInfo";

import styles from "./userImages.module.scss";

const UserImages = ({ isDel = false, isMain = false, isBack = true }) => {
  const { imagesList, images } = useSelector((state) => state.userImages);

  const dispatch = useDispatch();
  const handleDel = (id) => {
    dispatch(ImagesAPI.deleteImage(id));
  };

  const handleSetBack = (id) => {
    dispatch(ImagesAPI.backImage(id));
  };

  const handleSet = (id) => {
    dispatch(ImagesAPI.mainImage(id));
    dispatch(UserInfoAPI.getUserInfo());
  };

  useEffect(() => {
    dispatch(ImagesAPI.getImages());
  }, [images, imagesList.length]);

  return (
    <div className={styles.uploadImagesContainer}>
      {imagesList
        ? imagesList?.map((img, idx) => (
            <Fragment key={idx}>
              <img src={"http://192.168.2.208:8000" + img.path} />
              <div className={styles.imageDel}>
                {isDel && (
                  <MainButton
                    variant="contained"
                    onClick={() => handleDel(img.id)}
                  >
                    X
                  </MainButton>
                )}
                {isMain && (
                  <MainButton
                    variant="contained"
                    onClick={() => handleSet(img.id)}
                  >
                    Add main image
                  </MainButton>
                )}
                {isBack && (
                  <MainButton
                    variant="contained"
                    onClick={() => handleSetBack(img.id)}
                  >
                    Add background image
                  </MainButton>
                )}
              </div>
            </Fragment>
          ))
        : ""}
    </div>
  );
};

export default UserImages;
