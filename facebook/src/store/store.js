import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import Auth from "./auth/slice";
import UploadImages from "./uploadImages/images/slice";
import UploadImage from "./uploadImages/image/slice";
import UserImages from "./images/slice";
import UserInfo from "./userInfo/slice";

export const store = configureStore({
  reducer: {
    auth: Auth.reducer,
    uploadImage: UploadImage.reducer,
    uploadImages: UploadImages.reducer,
    userImages: UserImages.reducer,
    userInfo: UserInfo.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
  devTools: process.env.REACT_APP_ENV !== "dev",
});
