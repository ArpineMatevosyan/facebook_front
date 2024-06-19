import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosPost from "../axios/axiosPost";
import axiosPut from "../axios/axiosPut";

export const AuthAPI = Object.freeze({
  postRegister: createAsyncThunk("post/post-register", async (data) => {
    return await axiosPost.post("api/register", data);
  }),
  postLogin: createAsyncThunk("post/post-login", async (data) => {
    return await axiosPost.post("api/login", data);
  }),
  postVerify: createAsyncThunk("post/post-verify", async (data) => {
    return await axiosPost.post("api/verify-email", data);
  }),
  postForGotPass: createAsyncThunk("post/post-forGot", async (data) => {
    return await axiosPost.post("api/forgot-password", data);
  }),
  putChangePass: createAsyncThunk("put/put-changePass", async (data) => {
    return await axiosPut.put("api/change-password", data);
  }),
});
