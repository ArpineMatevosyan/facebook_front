import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosPost from "../../axios/axiosPost";

export const UploadImagesAPI = Object.freeze({
  postImages: createAsyncThunk("post/upload-mixed-media", async (file) => {
    return await axiosPost.post("api/upload-mixed-media", file);
  }),
  postAllImages: createAsyncThunk("post/upload-user-images", async (image) => {
    return await axiosPost.post("api/upload-user-images", image);
  }),
});
