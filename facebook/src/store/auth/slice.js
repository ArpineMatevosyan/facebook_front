import { createSlice } from "@reduxjs/toolkit";
import { AuthAPI } from "../../services/auth/slice";

const Auth = createSlice({
  name: "Auth",
  initialState: {
    list: [],
    onRegister: "",
    deleteRegister: "",
    status: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(AuthAPI.postRegister.fulfilled, (state, action) => {
        state.status = action.payload.statusText;
      })
      .addCase(AuthAPI.postLogin.fulfilled, (state, action) => {
        console.log(action.payload, "oo");
      });
  },
});

export default Auth;
