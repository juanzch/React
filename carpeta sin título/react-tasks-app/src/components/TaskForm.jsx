import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm({}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { tasks, createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = tasks.length;

    const newTask = {
      id,
      title,
      description,
    };
    createTask(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-indigo-600 p-10 mb-5">
        <h1 className="text-2xl font-bold text-white mb-3 ">Crea tu tarea</h1>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Escribe tu tarea"
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Escribe la descripcion"
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"

        />
        <button
        className="bg-indigo-500 px-3 py-1 text-white rounded-md hover:bg-indigo-400"
        >Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
