import React, { useState } from "react";

// List hooks and types
import { ListType } from "../storage";
import { StoreInterface } from "../redux/store";

// Components
import ListCard from "./ListCard";

// Redux
import { useSelector } from "react-redux";

const Items = () => {
  //Get all lists from storage
  const listFromStorage = useSelector(
    (state: StoreInterface) => state.lists.lists
  );

  const [listArray, setListArray] = useState(listFromStorage);

  return (
    <div className="flex justify-center gap-12 flex-wrap">
      {listArray.map(({ title, id, items }: ListType) => {
        // Return a card for each todo list
        return (
          <div key={id}>
            <ListCard title={title} id={id} items={items} />
          </div>
        );
      })}
    </div>
  );
};

export default Items;
