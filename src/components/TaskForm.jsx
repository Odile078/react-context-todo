import { FaPlus } from "react-icons/fa";

const TaskForm = ({ tasks, setTasks, taskInput, setTaskInput }) => {
  const handleChangTaskInput = (e) => setTaskInput(e.target.value);
  const addTask = (e) => {
    e?.preventDefault();
    if (!taskInput.trim()) return;
    let taskArray = tasks.slice();
    taskArray.push({ checked: false, value: taskInput });
    setTasks(taskArray);
    setTaskInput("");
  };

  return (
    <form
      className="rounded-3xl  shadow-lg border-2 border-gray-300 flex py-4 px-10"
      onSubmit={addTask}
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
        onClick={addTask}
        className=" bg-teal-500 rounded-full p-2"
      >
        <FaPlus className=" text-white text-base" />
      </button>
    </form>
  );
};

export default TaskForm;
