import React from "react";
import MainButton from "../../components/button/button";
import { useDispatch, useSelector } from "react-redux";
import { UploadImagesAPI } from "../../services/uploadImages/slice";

import styles from "./images.module.scss";

const Image = () => {
  const { imagesList } = useSelector((state) => state.uploadImages);

  const dispatch = useDispatch();

  const onAdd = () => {};
  const onFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      const formData = new FormData();
      for (let file of files) {
        //console.log(file);
        formData.append("files", file);
      }

      dispatch(UploadImagesAPI.postImages(formData));
    }
  };
  const onDelate = () => {};

  return (
    <div>
      <div className={styles.container}>
        <label for="file" className={styles.chooseFile}>
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

      {imagesList.length ? (
        <div>
          <img src="" alt="Uploaded"></img>
          <MainButton variant="contained" onClick={onDelate}>
            X
          </MainButton>
        </div>
      ) : (
        ""
      )}
      <div>
        <MainButton variant="outlined" onClick={onAdd} disabled>
          Add
        </MainButton>
      </div>
    </div>
  );
};

export default Image;
