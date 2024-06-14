import { Fragment, useEffect } from "react";
import MainButton from "../../button/button";
import { useDispatch, useSelector } from "react-redux";
import { UploadImagesAPI } from "../../../services/uploadImages/slice";
import { isDel } from "../../../store/uploadImages/images/slice";
import { getImages } from "../../../services/images/slice";
import { deleteImage } from "../../../services/deleteImage/slice";

import styles from "./images.module.scss";

const Images = () => {
  const dispatch = useDispatch();
  const { image, imagesData, images } = useSelector(
    (state) => state.uploadImages
  );
  const { imagesList } = useSelector((state) => state.userImages);

  const onAdd = () => {
    if (images) {
      dispatch(
        UploadImagesAPI.postAllImages({ images: Array.from(imagesData) })
      );
    }
  };
  const onFileChange = (e) => {
    const files = e.target.files;
    dispatch(UploadImagesAPI.postImages({ images: Array.from(files) }));
  };

  const onDelate = (idx) => {
    dispatch(isDel(idx));
  };

  const handleDel = (imageId) => {
    dispatch(deleteImage(imageId));
  };

  useEffect(() => {
    dispatch(getImages());
  }, [images, imagesList]);

  return (
    <>
      <div className={styles.container}>
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
        {images ? (
          <>
            {images.map((image, idx) => (
              <div className={styles.imageBox} key={idx}>
                <img src={"http://192.168.2.208:8000" + image} alt="Uploaded" />
                <div className={styles.imageDel}>
                  <MainButton variant="contained" onClick={() => onDelate(idx)}>
                    X
                  </MainButton>
                </div>
              </div>
            ))}
            <div>
              <MainButton variant="outlined" onClick={onAdd} disabled>
                Add
              </MainButton>
            </div>
          </>
        ) : (
          " "
        )}
        <div className={styles.uploadImagesContainer}>
          {imagesList
            ? imagesList.map((img, idx) => (
                <Fragment key={idx}>
                  <img src={"http://192.168.2.208:8000" + img.path} />
                  <div className={styles.imageDel}>
                    <MainButton
                      variant="contained"
                      onClick={() => handleDel(img.id)}
                    >
                      X
                    </MainButton>
                  </div>
                </Fragment>
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

export default Images;
