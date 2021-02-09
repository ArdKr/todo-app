import React, { useState } from "react";

// Components
import Input from "./Input";
import Button from "./Button";

// Storage functions
import { addNewItemToList } from "../storage/update";

//types
import { TodoItemInterface } from "../storage/types";

interface NewItemProps {
  itemsList: TodoItemInterface[];
  setItemsList: React.Dispatch<React.SetStateAction<TodoItemInterface[]>>;
  listId: number;
}

const NewItem = ({ itemsList, setItemsList, listId }: NewItemProps) => {
  const [todoText, setTodoText] = useState("");

  const onButtonClick = () => {
    if (todoText) {
      const newItemId = addNewItemToList(
        { description: todoText },
        listId ?? 1
      );

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
  );
};

export default NewItem;
