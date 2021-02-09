import React from "react";

// Components
import Items from "./components/Items";

const App = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="header w-full text-center pb-8">
        <h1 className="text-xl mx-auto font-bold text-gray-700">Todo App</h1>
      </div>

      <div className="new-list">
        <div className="button">+</div>
      </div>

      <Items />
    </div>
  );
};

export default App;
