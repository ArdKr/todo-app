import { configureStore } from "@reduxjs/toolkit";

import listReducer from "./listsSlice";

// types
import { ListsObjectType } from "../storage/types";

export const store = configureStore({
  reducer: {
    lists: listReducer,
  },
});

export interface StoreInterface {
  lists: ListsObjectType;
}
