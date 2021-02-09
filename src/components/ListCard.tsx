import React, { useState, useEffect } from "react";

import { ListType, TodoItemInterface, addNewItemToList } from "../storage";
import { filterTodoItems } from "../storage/hooks";

// Redux
import { useSelector } from "react-redux";
import { StoreInterface } from "../redux/store";

// Components
import Input from "./Input";
import Button from "./Button";
import ListItem from "./ListItem";

const ListCard = ({ title, id, items }: ListType) => {
  const [todoText, setTodoText] = useState("");
  const [itemsList, setItemsList] = useState<TodoItemInterface[]>([]);

  const itemsFromStore = useSelector(
    (state: StoreInterface) => state.lists.lists
  );

  useEffect(() => {
    setItemsList(filterTodoItems(id ?? 1, itemsFromStore));
  }, []);

  const onButtonClick = () => {
    if (todoText) {
      const newItemId = addNewItemToList({ description: todoText }, id ?? 1);

      // Update list if new item added
      const newList = [...itemsList, { description: todoText, id: newItemId }];

      setItemsList(newList);
      setTodoText("");
    }
  };

  const onInputUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  return (
    <div className="bg-gray-100 mx-auto max-w-md rounded-md w-80">
      {/* Add new item to list div */}
      <div className=" p-4 relative">
        <Input
          placeholder={"Add new item"}
          itemText={todoText}
          onInputUpdate={onInputUpdate}
        />

        <div className="plus-icon absolute top-5 right-5 bg-white">
          <Button buttonText="+" onButtonClick={onButtonClick} />
        </div>
      </div>

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
