import { createSlice } from "@reduxjs/toolkit";
import { ImagesAPI } from "../../services/images";

const Media = createSlice({
  name: "Media",
  initialState: {
    status: null,
    imagesData: [],
    images: [],
    mainImage: "",
  },
  reducers: {
    isDel: (state, action) => {
      state.imagesData = state.imagesData.filter(
        (_, idx) => idx !== action.payload
      );
      state.images = state.images.filter((_, idx) => idx !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ImagesAPI.postImages.fulfilled, (state, action) => {
        state.imagesData = action.payload.data;
        state.images = action.payload.data.map((image) => image.path);
      })
      .addCase(ImagesAPI.postAllImages.fulfilled, (state, action) => {
        state.images = "";
      })
      .addCase(ImagesAPI.mainImage.fulfilled, (state, action) => {
        state.status = action.payload.data;
      });
  },
});

export const { isDel } = Media.actions;

export default Media;
