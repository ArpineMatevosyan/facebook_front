import React from "react";
import Button from "../../components/button/button";
import { useDispatch, useSelector } from "react-redux";
import { UploadImagesAPI } from "../../services/uploadImages/slice";

const Image = () => {
  const { imagesList } = useSelector((state) => state.uploadImages);
  //console.log(imagesList);

  const dispatch = useDispatch();

  const onAdd = () => {};
  const onFileChange = (e) => {
    const files = e.target.files[0];
    dispatch(UploadImagesAPI.postImages(files));
  };
  const onDelate = () => {};

  return (
    <div>
      <div>
        <label for="file">Choose file to upload</label>
        <input
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
          <Button variant="contained" onClick={onDelate} children="X" />
        </div>
      ) : (
        ""
      )}
      <div>
        <Button variant="outlined" onClick={onAdd} disabled children="Add" />
      </div>
    </div>
  );
};

export default Image;
