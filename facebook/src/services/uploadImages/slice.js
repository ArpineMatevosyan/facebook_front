import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosPost from "../../axios/axiosPost";

export const UploadImagesAPI = Object.freeze({
  postImages: createAsyncThunk("post/user-image", async (data) => {
    return await axiosPost.post("api/user-image", data);
  }),
});
