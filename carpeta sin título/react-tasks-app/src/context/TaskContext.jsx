import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react"
import { tasks as data } from "../data/task";


export const TaskContext = createContext()


export function TaskContextProvider(props) {

  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  let x = 20
  return (
    <TaskContext.Provider value={{
      tasks,
      createTask,
      deleteTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}
