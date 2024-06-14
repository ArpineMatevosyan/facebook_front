import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");

export const getImages = createAsyncThunk("images/getImages", async () => {
  const response = await axios.get(
    "http://192.168.2.208:8000/api/user-images",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
});
