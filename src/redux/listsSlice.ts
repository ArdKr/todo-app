import { createSlice } from "@reduxjs/toolkit";

const listsSlice = createSlice({
  name: "lists",
  initialState: {
    lists: [],
  },
  reducers: {
    updateLists(store, action) {
      store.lists = action.payload;
    },
  },
});

export const { updateLists } = listsSlice.actions;

export default listsSlice.reducer;
