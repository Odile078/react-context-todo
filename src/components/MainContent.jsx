import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";

const MainContent = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="flex justify-center items-center min-h-screen text-gray-800 p-6">
      <div className="max-w-xl sm:min-w-[500px] mx-auto">
        <h1 className="text-slate-300 text-center text-5xl font-bold">Todos</h1>
        <div className="mt-10 space-y-6">
          <TaskForm tasks={tasks} setTasks={setTasks} />
          <div className="flex flex-col gap-4">
            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <TaskCard
                  key={index}
                  taskIndex={index}
                  task={task}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              ))
            ) : (
              <p className="font-bold text-3xl text-gray-600">
                What are your to do tasks for today?
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;