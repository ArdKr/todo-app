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
