import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useEffect } from "react";

function App() {


  return (
    <div className=" h-screen">
      <div className="container  mx-auto p-10">
        <TaskForm/>
        <TaskList/>
      </div>
    </div>
  );
}

export default App;
