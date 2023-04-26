import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const hiddenArticlesSlice = createSlice({
  name: "hiddenArticles",
  initialState,
  reducers: {
    addhiddenArticle: (state, action) => {
      state.value.push(action.payload);
    },
    removeHiddenArticle: (state) => {
      state.value = [];
    },
  },
});

export const { addhiddenArticle, removeHiddenArticle } =
  hiddenArticlesSlice.actions;
export default hiddenArticlesSlice.reducer;
