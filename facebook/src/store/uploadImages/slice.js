import { createSlice } from "@reduxjs/toolkit";
import { UploadImagesAPI } from "../../services/uploadImages/slice";

const UploadImages = createSlice({
  name: "UploadImages",
  initialState: {
    imagesList: [],
    image: "",
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(UploadImagesAPI.postImages.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(UploadImagesAPI.postImages.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(UploadImagesAPI.postImages.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

//export const {} = UploadImages.actions;

export default UploadImages;
