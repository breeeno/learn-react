import { useState } from "react";

interface TodoInputProps {
  handleAddTasks: (task: string) => void;
}

export default function TodoInput({ handleAddTasks }: TodoInputProps) {
  const [task, setTaskValue] = useState("");

  return (
    <header>
      <input
        value={task}
        onChange={(e) => setTaskValue(e.target.value)}
        placeholder="Enter task"
      />
      <button
        type="button"
        onClick={() => {
          handleAddTasks(task);
          setTaskValue(""); 
        }}
      >
        Add
      </button>
    </header>
  );
}
