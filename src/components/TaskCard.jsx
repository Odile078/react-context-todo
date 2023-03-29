import { FaTrash } from "react-icons/fa";

const TaskCard = ({ taskIndex, task, tasks, setTasks }) => {
  const deleteTask = (selectedTask) => {
    let taskArray = tasks.filter((task) => task !== selectedTask);
    setTasks(taskArray);
  };
  const markTaskDone = (selectedTaskIndex) => {
    let newTaskArray = tasks.map((task, index) => {
      if (index === selectedTaskIndex) {
        const newTask = { ...task, checked: !task.checked };
        task = newTask;
        return newTask;
      } else return task;
    });
    setTasks(newTaskArray);
  };

  return (
    <div className="flex gap-6 justify-between flex-wrap sm:flex-nowrap border-b border-gray-200 py-2">
      <div className="flex gap-3">
        <div class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
          <input
            type="checkbox"
            id={`checkbox${+1} ${taskIndex}`}
            value=""
            checked={task.checked ? true : false}
            onChange={() => markTaskDone(taskIndex)}
            aria-label="..."
          />
          <label class="sr-only" for={`checkbox${taskIndex + 1}`}>
            {task.value}
          </label>
        </div>
        <p className={`text-lg ${task.checked ? "line-through" : ""}`}>
          {task.value}
        </p>
      </div>
      <button
        className="p-3 bg-gray-100 rounded-full h-fit "
        onClick={() => deleteTask(task)}
      >
        <FaTrash className="text-red-600" />
      </button>
    </div>
  );
};

export default TaskCard;
