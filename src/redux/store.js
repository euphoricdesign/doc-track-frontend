import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { DoctorSlice } from "./doctorSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    doctors: DoctorSlice.reducer,
  },
});

export default store;
