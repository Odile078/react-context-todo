import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";

const MainContent = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  return (
    <div className="flex justify-center items-center min-h-screen text-gray-800 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-slate-300 text-center text-5xl font-bold">Todos</h1>
        <div className="mt-10 space-y-6">
          <TaskForm
            tasks={tasks}
            setTasks={setTasks}
            taskInput={taskInput}
            setTaskInput={setTaskInput}
          />
          <div className="flex flex-col gap-4">
            {tasks.map((task, index) => (
              <TaskCard
                key={index}
                taskIndex={index}
                task={task}
                tasks={tasks}
                setTasks={setTasks}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
