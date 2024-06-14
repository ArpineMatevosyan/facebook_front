import { useEffect, useState } from "react";
import MainButton from "../../button/button";
import { useDispatch, useSelector } from "react-redux";
import { UploadImagesAPI } from "../../../services/uploadImages/slice";
import { isDel } from "../../../store/uploadImages/image/slice";

import styles from "./images.module.scss";

const Image = () => {
  const dispatch = useDispatch();
  const { imagesList, image, imageData, images } = useSelector(
    (state) => state.uploadImage
  );

  const onAdd = () => {
    if (image) {
      dispatch(
        UploadImagesAPI.postAllImages({ images: Array.from(imageData) })
      );
    }
  };
  const onFileChange = (e) => {
    const files = e.target.files;
    dispatch(UploadImagesAPI.postImages({ images: Array.from(files) }));
  };

  const onDelate = () => {
    dispatch(isDel());
  };

  return (
    <div className={styles.container}>
      {imagesList.length ? <div> </div> : ""}
      <div className={styles.chooseFileContainer}>
        <label htmlFor="file" className={styles.chooseFile}>
          Choose file to upload
        </label>
        <input
          className={styles.file}
          type="file"
          id="file"
          name="file"
          multiple
          onChange={onFileChange}
        />
      </div>
      {image ? (
        <div className={styles.imageBox}>
          <img src={"http://192.168.2.208:8000" + image} alt="Uploaded"></img>
          <div className={styles.imageDel}>
            <MainButton variant="contained" onClick={onDelate}>
              X
            </MainButton>
          </div>
          <div>
            <MainButton variant="outlined" onClick={onAdd} disabled>
              Add
            </MainButton>
          </div>
        </div>
      ) : (
        " "
      )}
      <div className={styles.uploadImagesContainer}>
        {imagesList
          ? imagesList.map((img) => (
              <img src={"http://192.168.2.208:8000" + img.path}></img>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Image;
