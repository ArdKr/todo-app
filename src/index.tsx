import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Redux
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { updateLists } from "./redux/listsSlice";

//Storage functions
import {
  isStorageEmpty,
  createListStorage,
  createNewList,
  getListsFromStorage,
} from "./storage";

// Create storage if not already created
if (isStorageEmpty()) {
  createListStorage();

  createNewList({ title: "To Do", items: [] });
}

// Update redux store to save the list
const itemsList = getListsFromStorage();
store.dispatch(updateLists(itemsList));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
