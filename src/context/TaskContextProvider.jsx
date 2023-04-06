import { nanoid } from "nanoid";
import { createContext, useState } from "react";

export const TaskContext = createContext();
const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const createTask = (taskInput) => {
    let taskArray = tasks.slice();
    taskArray.push({
      id: nanoid(),
      value: taskInput,
      checked: false,
      isEditing: false,
    });
    setTasks(taskArray);
  };
  const enableEditing = (taskId) => {
    let newTasksArray = tasks.map((task, index) => {
      if (task.id === taskId) {
        const newTask = { ...task, isEditing: !task.isEditing };
        return newTask;
      } else return task;
    });
    setTasks(newTasksArray);
  };
  const updateTask = (taskId, newValue) => {
    let newTasksArray = tasks.map((task, index) => {
      if (task.id === taskId) {
        const newTask = { ...task, value: newValue, isEditing: false };
        return newTask;
      } else return task;
    });
    setTasks(newTasksArray);
  };
  const markTaskDone = (selectedTaskId) => {
    let newTasksArray = tasks.map((task, index) => {
      if (task.id === selectedTaskId) {
        const newTask = { ...task, checked: !task.checked };
        task = newTask;
        return newTask;
      } else return task;
    });
    setTasks(newTasksArray);
  };
  const deleteTask = (selectedTaskId) => {
    let newTasksArray = tasks.filter((task) => task.id !== selectedTaskId);
    setTasks(newTasksArray);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        updateTask,
        deleteTask,
        markTaskDone,
        enableEditing,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
