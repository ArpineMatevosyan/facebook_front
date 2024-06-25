import { createSlice } from "@reduxjs/toolkit";
import { AuthAPI } from "../../services/auth";

const Auth = createSlice({
  name: "Auth",
  initialState: {
    onRegister: "",
    deleteRegister: "",
    status: null,
    signIn: false,
    verifyEmail: "",
    verify: false,
    changePassStatus: false,
  },
  reducers: {
    isSignIn: (state, action) => {
      state.signIn = action.payload;
    },
    isVerifyEmail: (state, action) => {
      state.verifyEmail = action.payload;
    },
    isChangePassStatus: (state, action) => {
      state.changePassStatus = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(AuthAPI.postRegister.fulfilled, (state, action) => {
        //state.status = action.payload.statusText;
      })
      .addCase(AuthAPI.postLogin.fulfilled, (state, action) => {
        const { token } = action.payload.data.data;
        localStorage.setItem("token", token);
        state.signIn = true;
      })

      .addCase(AuthAPI.postVerify.fulfilled, (state, action) => {
        console.log(action.payload.data.data.original.message);
        if (
          action.payload.data.data.original.message ===
          "Email verified successfully"
        ) {
          state.verify = true;
        }
      })
      .addCase(AuthAPI.putChangePass.fulfilled, (state, action) => {
        if (action.payload.data.data) {
          state.changePassStatus = true;
        }
      });
  },
});

export const { isSignIn, isVerifyEmail, isChangePassStatus } = Auth.actions;

export default Auth;
