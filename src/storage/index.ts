// Utils
import { createId } from "../utils";

// Redux
import { store } from "../redux/store";
import { updateLists } from "../redux/listsSlice";

const TODO_LIST_STORAGE_NAME = "todo-lists";

// Each todo list structure
export interface ListType {
  id?: number;
  title: string;
  items: TodoItemInterface[];
}

export interface TodoItemInterface {
  id?: number;
  description: string;
}

// structure of the whole array that holds the lists
export type ListsObjectType = { lists: ListType[] };

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

export const removeItemFromList = (itemId: number, listId: number) => {
  const currentList = getListsFromStorage();

  const myList = currentList.find((item: ListType) => item.id === listId);

  const newUpdatedList = currentList.filter(
    (item: ListType) => item.id !== listId
  );

  const newItemsList = myList.items.filter(
    (item: TodoItemInterface) => item.id !== itemId
  );

  myList.items = newItemsList;

  const listToUpdate = [myList, ...newUpdatedList];

  updateStorage(listToUpdate);

  return itemId;
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

// Updates the storage with a new given list
export const updateStorage = (newListObject: ListType[]) => {
  localStorage.removeItem(TODO_LIST_STORAGE_NAME);

  const stringListsObject = JSON.stringify(newListObject);

  localStorage.setItem(TODO_LIST_STORAGE_NAME, stringListsObject);
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
