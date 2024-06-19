import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosGet from "../axios/axiosGet";

export const UserInfoAPI = Object.freeze({
  getUserInfo: createAsyncThunk("get/get-getUserInfo", async (data) => {
    return await axiosGet.get("api/user-show", data);
  }),
});
