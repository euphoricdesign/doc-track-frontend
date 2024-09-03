import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  doctors: [],
};

export const DoctorSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {
    setDoctors: (state, action) => {
      state.doctors = action.payload;
    },
  },
});

export const { setDoctors } = DoctorSlice.actions;
