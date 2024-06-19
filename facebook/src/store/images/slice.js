import { createSlice } from "@reduxjs/toolkit";
import { ImagesAPI } from "../../services/images";

const UserImages = createSlice({
  name: "UserImages",
  initialState: {
    imagesList: [],
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
      .addCase(ImagesAPI.getImages.fulfilled, (state, action) => {
        state.imagesList = action.payload.data.data.reverse();
      })
      .addCase(ImagesAPI.postImages.fulfilled, (state, action) => {
        console.log(action.payload.data);
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

export const { isDel } = UserImages.actions;

export default UserImages;
