import { createSlice } from "@reduxjs/toolkit";
import { UploadImagesAPI } from "../../../services/uploadImages/slice";
import { deleteImage } from "../../../services/deleteImage/slice";

const UploadImage = createSlice({
  name: "UploadImage",
  initialState: {
    imagesList: [],
    image: "",
    imageData: "",
    status: null,
  },
  reducers: {
    isDel: (state, action) => {
      state.image = "";
      state.imageData = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UploadImagesAPI.postImages.fulfilled, (state, action) => {
        state.imageData = action.payload.data;
        state.image = action.payload.data[0].path;
      })
      .addCase(UploadImagesAPI.postAllImages.fulfilled, (state, action) => {
        state.imagesList.push(action.payload.data.data[0]);
        state.image = "";
      })
      .addCase(deleteImage.fulfilled, (state, action) => {
        //  console.log(action);
      });
  },
});

export const { isDel } = UploadImage.actions;

export default UploadImage;
