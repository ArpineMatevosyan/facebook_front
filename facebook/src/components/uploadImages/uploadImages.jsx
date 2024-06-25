import MainButton from "../button/button";
import { useDispatch, useSelector } from "react-redux";
import { ImagesAPI } from "../../services/images";
import { isDel } from "../../store/media/slice";
import UserImages from "../userImages/userImages";

import styles from "./images.module.scss";
import clsx from "clsx";

const Images = () => {
  const dispatch = useDispatch();
  const { imagesData, images } = useSelector((state) => state.media);

  const onAdd = () => {
    if (images) {
      dispatch(ImagesAPI.postAllImages({ images: Array.from(imagesData) }));
    }
  };
  const onFileChange = (e) => {
    const files = e.target.files;
    dispatch(ImagesAPI.postImages({ images: Array.from(files) }));
  };

  const onDelate = (idx) => {
    dispatch(isDel(idx));
  };

  return (
    <>
      <div className={clsx(styles.container)}>
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
            {images?.map((image, idx) => (
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
        <UserImages isDel={true} isMain={true} />
      </div>
    </>
  );
};

export default Images;
