import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { DoctorSlice } from "./doctorSlice";
import { CategoriesSlice } from "./categoriesSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    doctors: DoctorSlice.reducer,
    categories: CategoriesSlice.reducer
  },
});

export default store;
