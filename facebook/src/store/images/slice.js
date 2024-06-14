import { createSlice } from "@reduxjs/toolkit";
import { getImages } from "../../services/images/slice";

const UserImages = createSlice({
  name: "UserImages",
  initialState: {
    imagesList: [],
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getImages.fulfilled, (state, action) => {
      state.imagesList = action.payload.data.reverse();
    });
  },
});

//export const {} = UploadImage.actions;

export default UserImages;
