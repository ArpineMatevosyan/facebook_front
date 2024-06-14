import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "../../services/userInfo/slice";

const UserInfo = createSlice({
  name: "UserInfo",
  initialState: {
    userInfo: null,
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.userInfo = action.payload.data;
    });
  },
});

//export const {} = UserInfo.actions;

export default UserInfo;
