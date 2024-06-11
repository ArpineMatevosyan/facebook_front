import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import Auth from "./auth/slice";
import UploadImages from "./uploadImages/slice";

export const store = configureStore({
  reducer: {
    auth: Auth.reducer,
    uploadImages: UploadImages.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
  devTools: process.env.REACT_APP_ENV !== "dev",
});
