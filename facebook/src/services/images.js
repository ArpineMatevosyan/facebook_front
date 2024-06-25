import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosGet from "../axios/axiosGet";
import axiosPost from "../axios/axiosPost";

export const ImagesAPI = Object.freeze({
  // getImages: createAsyncThunk("get/get-images", async (data) => {
  //   return await axiosGet.get("api/user-images", data);
  // }),
  mainImage: createAsyncThunk("post/post-mainImages", async (id) => {
    return await axiosPost.post(`api/add-user-main-image/${id}`);
  }),
  deleteImage: createAsyncThunk("del/del-deleteImage", async (id) => {
    return await axiosPost.delete(`api/user-image-delete/${id}`);
  }),
  postImages: createAsyncThunk("post/upload-mixed-media", async (file) => {
    return await axiosPost.post("api/upload-mixed-media", file);
  }),
  postAllImages: createAsyncThunk("post/upload-user-images", async (image) => {
    return await axiosPost.post("api/upload-user-images", image);
  }),
  backImage: createAsyncThunk("post/post-backImage", async (id) => {
    return await axiosPost.post(`api/add-user-bg-image/${id}`);
  }),
});
