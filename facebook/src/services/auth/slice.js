import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosPost from "../../axios/axiosPost";

export const AuthAPI = Object.freeze({
  postRegister: createAsyncThunk("post/post-register", async (data) => {
    return await axiosPost.post("api/register", data);
  }),
  postLogin: createAsyncThunk("post/post-login", async (data) => {
    return await axiosPost.post("api/login", data);
  }),
});
