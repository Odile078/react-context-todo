import MainContent from "./components/MainContent";
import TaskContextProvider from "./context/TaskContextProvider";

function App() {
  return (
    <TaskContextProvider>
      <MainContent />
    </TaskContextProvider>
  );
}

export default App;
