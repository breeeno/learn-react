import TodoCard from "./TodoCard";

interface TodoListProps {
  taskList: string[];
  taskDeletion: (task: string) => void;
  taskEdit: (oldTask: string, newTask: string) => void;
}

export default function TodoList({
  taskList,
  taskDeletion,
  taskEdit,
}: TodoListProps) {
  return (
    <ul className="main">
      {taskList.map((task) => (
        <TodoCard
          key={task}
          task={task}
          onDelete={taskDeletion}
          onEdit={taskEdit}
        >
          <p>{task}</p>
        </TodoCard>
      ))}
    </ul>
  );
}
