import { createSlice } from "@reduxjs/toolkit";
import { UploadImagesAPI } from "../../../services/uploadImages/slice";

const UploadImages = createSlice({
  name: "UploadImages",
  initialState: {
    imagesList: [],
    images: [],
    imagesData: [],
    status: null,
  },
  reducers: {
    isDel: (state, action) => {
      //state.images.filter((image) => (image[action] = action));
      state.imagesData = state.imagesData.filter(
        (_, idx) => idx !== action.payload
      );
      state.images = state.images.filter((_, idx) => idx !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(UploadImagesAPI.postImages.fulfilled, (state, action) => {
        console.log(action.payload.data);
        state.imagesData = action.payload.data;
        state.images = action.payload.data.map((image) => image.path);
      })
      .addCase(UploadImagesAPI.postAllImages.fulfilled, (state, action) => {
        //  state.imagesList = action.payload.data.map((path) => path[0]);
        //  state.imagesList.push(action.payload.data.data);
        state.images = "";
        state.status = action.payload.data.data;
      });
  },
});

export const { isDel } = UploadImages.actions;

export default UploadImages;
