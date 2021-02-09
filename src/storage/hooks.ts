import { getListsFromStorage, ListType } from "./index";

// Types
import { TodoItemInterface, ListsObjectType } from "./index";

export const filterTodoItems = (listId: number, items: ListType[]) => {
  let todoItems: TodoItemInterface[] = [];

  items.forEach((item) => {
    if (item.id === listId) {
      todoItems = item.items;
    }
  });

  return todoItems;
};
