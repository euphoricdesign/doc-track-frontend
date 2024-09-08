import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const CategoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, { payload }) => {
      state.categories = payload;
    },
  },
});

export const { setCategories } = CategoriesSlice.actions;
