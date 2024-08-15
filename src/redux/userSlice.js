import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  authenticated: false,
  userAppointments: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAuthenticated: (state) => {
      state.authenticated = true;
    },
    setUnAuthenticated: (state) => {
      state.user = null;
      state.authenticated = false;
    },
    setUserAppointments: (state, action) => {
      state.userAppointments = action.payload;
    },
  },
});

export const {
  setUser,
  setAuthenticated,
  setUnAuthenticated,
  setUserAppointments,
} = userSlice.actions;
