// Utils
import { createId } from "../utils";

import { updateStorage } from "./update";

// Types
import { TodoItemInterface, ListType, ListsObjectType } from "./types";

export const TODO_LIST_STORAGE_NAME = "todo-lists";

export const removeItemFromList = (itemId: number, listId: number) => {
  const currentList = getListsFromStorage();

  // Find the list that needs to be updated
  const myList = currentList.find((item: ListType) => item.id === listId);

  // Remove the current list from the array so we can add the updated one later
  const newUpdatedList = currentList.filter(
    (item: ListType) => item.id !== listId
  );

  // Filter through items of that list to remove the item
  const newItemsList = myList.items.filter(
    (item: TodoItemInterface) => item.id !== itemId
  );

  myList.items = newItemsList;

  // New list that's going to be saved in the store & storage
  const listToUpdate = [myList, ...newUpdatedList];

  updateStorage(listToUpdate);
};

export const createNewList = ({ title }: ListType) => {
  const listId = createId();

  const currentList = getListsFromStorage();

  const newListObject: ListType = {
    id: listId,
    title,
    items: [],
  };

  const listArray = currentList.lists;

  listArray.push(newListObject);

  updateStorage(listArray);
};

// Create a new storage
// Use in case no storage is already created
export const createListStorage = () => {
  const listArray: ListsObjectType = { lists: [] };

  // Save items to localStorage
  localStorage.setItem(TODO_LIST_STORAGE_NAME, JSON.stringify(listArray));
};

export const isStorageEmpty = () => {
  return localStorage.getItem(TODO_LIST_STORAGE_NAME) === null;
};

export const getListsFromStorage = () => {
  const lists: string = localStorage.getItem(TODO_LIST_STORAGE_NAME) ?? "";

  return JSON.parse(lists);
};
