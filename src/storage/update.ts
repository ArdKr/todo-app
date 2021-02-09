// Utils
import { createId } from "../utils";

// Redux
import { store } from "../redux/store";
import { updateLists } from "../redux/listsSlice";

// Types
import { TodoItemInterface, ListType, ListsObjectType } from "./types";

import { getListsFromStorage, TODO_LIST_STORAGE_NAME } from "./index";

export const addNewItemToList = (
  { description }: TodoItemInterface,
  listId: number
) => {
  const itemId = createId();

  const currentList = getListsFromStorage();

  currentList.forEach((item: ListType) => {
    if (item.id === listId) {
      item.items.push({ id: itemId, description });
    }
  });

  updateStorage(currentList);

  store.dispatch(updateLists(currentList));

  return itemId;
};

// Updates the storage with a new given list
export const updateStorage = (newListObject: ListType[]) => {
  localStorage.removeItem(TODO_LIST_STORAGE_NAME);

  const stringListsObject = JSON.stringify(newListObject);

  localStorage.setItem(TODO_LIST_STORAGE_NAME, stringListsObject);
};
