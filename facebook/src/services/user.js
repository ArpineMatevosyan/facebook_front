import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosGet from "../axios/axiosGet";
import axiosPut from "../axios/axiosPut";
import axiosPost from "../axios/axiosPost";

export const UserInfoAPI = Object.freeze({
  getUserInfo: createAsyncThunk("get/get-getUserInfo", async (data) => {
    return await axiosGet.get("api/user-show-me", data);
  }),
  getImages: createAsyncThunk("get/get-images", async (data) => {
    return await axiosGet.get("api/user-images", data);
  }),
  putChangeInfo: createAsyncThunk("put/put-changeInfo", async (data) => {
    return await axiosPut.put("api/user-update", data);
  }),
  postAddFriend: createAsyncThunk("post/add-friend", async (id) => {
    return await axiosPost.post(`api/add-friend/${id}`);
  }),
  postSearch: createAsyncThunk("post/post-search", async (data) => {
    return await axiosPost.post("api/user-search", data);
  }),
});
