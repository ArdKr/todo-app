
// Each todo list structure
interface ListType {
  id: number;
  description: string;
  isCompleted: boolean;
}

// structure of the whole array that holds the lists
type ListsObjectType = [lists: ListType[]];


export const createList = () => {
  //
}

export const useList = (listId: number) => {};
