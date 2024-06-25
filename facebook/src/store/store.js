import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import Auth from "./auth/slice";
import Media from "./media/slice";
import UserInfo from "./user/slice";

export const store = configureStore({
  reducer: {
    auth: Auth.reducer,
    media: Media.reducer,
    user: UserInfo.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
  devTools: process.env.REACT_APP_ENV !== "dev",
});
