import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");

export const deleteImage = createAsyncThunk(
  "images/deleteImage",
  async (imageId) => {
    const token = localStorage.getItem("token");
    const response = await axios.delete(
      `http://192.168.2.208:8000/api/user-image-delete/${imageId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return imageId;
  }
);
