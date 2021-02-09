import React, { useState, useEffect } from "react";

import { ListType, TodoItemInterface, addNewItemToList } from "../storage";
import { filterTodoItems } from "../storage/hooks";

// Redux
import { useSelector } from "react-redux";
import { StoreInterface } from "../redux/store";

// Components
import ListItem from "./ListItem";
import NewItem from "./NewItem";

const ListCard = ({ title, id, items }: ListType) => {
  const [itemsList, setItemsList] = useState<TodoItemInterface[]>([]);

  const itemsFromStore = useSelector(
    (state: StoreInterface) => state.lists.lists
  );

  useEffect(() => {
    setItemsList(filterTodoItems(id ?? 1, itemsFromStore));
  }, []);

  return (
    <div className="bg-gray-100 mx-auto max-w-md rounded-md w-80">
      {/* Add new item to list div */}
      <NewItem
        itemsList={itemsList}
        setItemsList={setItemsList}
        listId={id ?? 1}
      />

      {/* Items list */}
      {itemsList.length !== 0 && (
        <div className="list pb-4">
          {itemsList.map((item) => {
            return <ListItem item={item} key={item.id} listId={id ?? 1} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ListCard;
