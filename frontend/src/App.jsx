import React from "react";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>
        <Home />
      </div>
    </div>
  );
};

export default App;
