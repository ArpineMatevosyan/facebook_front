import { createSlice } from "@reduxjs/toolkit";
import { UserInfoAPI } from "../../services/user";

const UserInfo = createSlice({
  name: "UserInfo",
  initialState: {
    imagesList: [],
    userInfo: null,
    status: null,
    searchData: null,
    friendsRequest: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(UserInfoAPI.getUserInfo.fulfilled, (state, action) => {
        state.userInfo = action.payload.data.data;
        state.imagesList = action.payload.data.data.images.reverse();
      })
      .addCase(UserInfoAPI.postSearch.fulfilled, (state, action) => {
        if (action.payload.data.data) {
          state.searchData = action.payload.data.data.original;
        }
      })
      .addCase(UserInfoAPI.postSendFriend.fulfilled, (state, action) => {
        console.log(action.payload.data.data);
      })
      .addCase(UserInfoAPI.getFriends.fulfilled, (state, action) => {
        state.friendsRequest = action.payload.data.data;
        console.log(action.payload.data.data);
      });
  },
});

export default UserInfo;
