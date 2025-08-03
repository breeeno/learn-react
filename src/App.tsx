import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [taskList, setTaskList] = useState<string[]>([]);

  function handleAddTasks(newTask: string) {
    setTaskList([...taskList, newTask]);
  }

  function handleDeleteTask(taskToDelete: string) {
    const newTodoList = taskList.filter((task) => task !== taskToDelete);
    setTaskList(newTodoList);
  }

  function handleEditTask(oldTask: string, newTask: string) {
    setTaskList(taskList.map((task) => (task === oldTask ? newTask : task)));
  }

  return (
    <>
      <TodoInput handleAddTasks={handleAddTasks} />
      <TodoList
        taskList={taskList}
        taskDeletion={handleDeleteTask}
        taskEdit={handleEditTask}
      />
    </>
  );
}

export default App;
