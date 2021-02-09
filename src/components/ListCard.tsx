import React from "react";

// TODO: useTodo to find todos about this card

const ListCard = () => {
  return (
    <div className="bg-gray-100 mx-auto max-w-xs rounded-md">
      {/* Add new item to list div */}
      <div className=" p-4 relative">
        <div className="input w-full ">
          <input
            type="text"
            className="w-full border p-2 pl-4 focus:outline-none rounded-md"
            placeholder="Add new item"
          />
        </div>

        <div className="plus-icon absolute top-5 right-5">
          <button className="transition h-8 w-8 rounded-md text-xl font-bold text-gray-700  hover:bg-gray-200">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
