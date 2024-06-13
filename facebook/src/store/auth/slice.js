import { createSlice } from "@reduxjs/toolkit";
import { AuthAPI } from "../../services/auth/slice";

const Auth = createSlice({
  name: "Auth",
  initialState: {
    list: [],
    onRegister: "",
    deleteRegister: "",
    status: null,
    signIn: false,
  },
  reducers: {
    isSignIn: (state, action) => {
      state.signIn = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(AuthAPI.postRegister.fulfilled, (state, action) => {
        state.status = action.payload.statusText;
      })
      .addCase(AuthAPI.postLogin.fulfilled, (state, action) => {
        const { token, user } = action.payload.data.data;
        localStorage.setItem("token", token);
        state.signIn = true;
        if (user) {
          console.log(user.name);
          state.list.push({
            name: user.name,
            surname: user.surname,
          });
        }
        // user ? state.list.push({ name: user.name, surname: user.surname }) : "";
        console.log(state.list);
        console.log(user.name);
      });
  },
});

export const { isSignIn } = Auth.actions;

export default Auth;
