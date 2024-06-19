import { createSlice } from "@reduxjs/toolkit";
import { UserInfoAPI } from "../../services/userInfo";

const UserInfo = createSlice({
  name: "UserInfo",
  initialState: {
    userInfo: null,
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(UserInfoAPI.getUserInfo.fulfilled, (state, action) => {
      state.userInfo = action.payload.data.data;
    });
  },
});

export default UserInfo;
