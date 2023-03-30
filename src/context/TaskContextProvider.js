import { createContext } from "react";

export const TaskContext = createContext();
const TaskContextProvider = () => {
  return <TaskContext.Provider value={""}></TaskContext.Provider>;
};

export default TaskContextProvider;
