import { ReactNode, useState } from "react";

interface TodoCardProps {
  children: ReactNode;
  task: string;
  onDelete: (task: string) => void;
  onEdit: (oldTask: string, newTask: string) => void;
}

export default function TodoCard({
  children,
  task,
  onDelete,
  onEdit,
}: TodoCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(task);

  function handleEditConfirm() {
    onEdit(task, editedValue);
    setIsEditing(false);
  }

  return (
    <li className="todoItem">
      {isEditing ? (
        <>
          <input
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
          />
          <button type="button" onClick={handleEditConfirm}>
            Save
          </button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </>
      ) : (
        <>
          {children}
          <div className="actionsContainer">
            <i className="fa-solid fa-check"></i>
            <i className="fa-solid fa-trash" onClick={() => onDelete(task)}></i>
            <i
              className="fa-solid fa-pen"
              onClick={() => setIsEditing(true)}
            ></i>
          </div>
        </>
      )}
    </li>
  );
}
