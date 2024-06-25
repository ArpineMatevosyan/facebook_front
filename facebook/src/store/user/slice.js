import { createSlice } from "@reduxjs/toolkit";
import { UserInfoAPI } from "../../services/user";

const UserInfo = createSlice({
  name: "UserInfo",
  initialState: {
    imagesList: [],
    userInfo: null,
    status: null,
    searchData: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UserInfoAPI.getUserInfo.fulfilled, (state, action) => {
        state.userInfo = action.payload.data.data;
      })
      .addCase(UserInfoAPI.getImages.fulfilled, (state, action) => {
        state.imagesList = action.payload.data.data.reverse();
      })
      .addCase(UserInfoAPI.postSearch.fulfilled, (state, action) => {
        if (action.payload.data.data) {
          state.searchData = action.payload.data.data.original;
        }
      });
  },
});

export default UserInfo;
