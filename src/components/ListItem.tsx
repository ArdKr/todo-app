import React, { useState } from "react";

// Todo item types
import { TodoItemInterface } from "../storage";

import { removeItemFromList } from "../storage";

const ListItem = ({
  item,
  listId,
}: {
  item: TodoItemInterface;
  listId: number;
}) => {
  const [renderMe, setRenderMe] = useState(true);

  const onDeleteButtonClick = () => {
    removeItemFromList(item.id ?? 1, listId);

    setRenderMe(false);
  };

  if (renderMe) {
    return (
      <div className="item  rounded-md bg-gray-200 relative" key={item.id}>
        <p className="text-gray-700 overflow-ellipsis  p-5 my-4 pr-12">
          {item.description}
        </p>

        <button
          className="absolute top-4 right-4 cursor-pointer"
          onClick={onDeleteButtonClick}
        >
          ❌
        </button>
      </div>
    );
  } else {
    return null;
  }
};

export default ListItem;
