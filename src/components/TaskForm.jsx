import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { TaskContext } from "../context/TaskContextProvider";

const TaskForm = () => {
  const [taskInput, setTaskInput] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleChangTaskInput = (event) => setTaskInput(event.target.value);
  const handleSubmitForm = (event) => {
    event?.preventDefault();
    if (!taskInput.trim()) return;
    createTask(taskInput);
    setTaskInput("");
  };

  return (
    <form
      className="rounded-3xl shadow-lg border-2 border-gray-300 flex py-4 px-10"
      onSubmit={handleSubmitForm}
    >
      <div className="flex flex-1">
        <label for="new task" className="sr-only">
          To do task
        </label>
        <input
          type="text"
          id="new task"
          placeholder="Add todo"
          className="w-full outline-none focus:outline-none"
          value={taskInput}
          onChange={handleChangTaskInput}
        />
      </div>
      <button
        type="button"
        onClick={handleSubmitForm}
        className="bg-teal-500 rounded-full p-2"
      >
        <FaPlus className="text-white text-base" />
      </button>
    </form>
  );
};

export default TaskForm;
