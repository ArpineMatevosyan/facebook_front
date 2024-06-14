import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");

export const getUserInfo = createAsyncThunk(
  "userInfo/getUserInfo",
  async () => {
    const response = await axios.get(
      "http://192.168.2.208:8000/api/user-show",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
);
