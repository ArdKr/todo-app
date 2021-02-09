import React from "react";

// Components
import ListCard from "./components/ListCard";

const App = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-xl font-bold text-gray-700">Todo App</h1>

      <ListCard />
    </div>
  );
};

export default App;
