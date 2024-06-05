import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../../services/getUsers/getUsers";

const auth = createSlice({
  name: "auth",
  initialState: {
    users: [],
    loading: false,
    error: null,
    name: false,
    password: "",
    signIn: false,
    createName: "",
    createPassword: "",
    repeatPassword: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setSignIn: (state) => {
      state.signIn = true;
    },
    setSignOut: (state) => {
      state.signIn = false;
      state.name = false;
    },
    setCreateName: (state, action) => {
      state.createName = action.payload;
    },
    setCreatePassword: (state, action) => {
      state.createPassword = action.payload;
    },
    setRepeatPassword: (state, action) => {
      state.repeatPassword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setName,
  setPassword,
  setCreateName,
  setCreatePassword,
  setRepeatPassword,
  setSignIn,
  setSignOut,
} = auth.actions;
export default auth.reducer;
