// TodoItem.tsx
import React from "react";

const TodoItem: React.FC<{
  task: string;
  isCompleted: boolean;
  onSetCompleted: () => void;
  onDelete?: () => void;//onDeleteが指定されている場合は関数型を返す
}> = ({ task, isCompleted, onSetCompleted, onDelete }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={onSetCompleted}
      />
      <span style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
        {task}
      </span>
      {onDelete && (
        <button className="delete-btn" onClick={onDelete}>
          削除
        </button>
      )}
    </li>
  );
};

export default TodoItem;
