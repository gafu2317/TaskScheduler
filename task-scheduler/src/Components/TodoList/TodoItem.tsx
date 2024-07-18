// TodoItem.tsx
import React from "react";
import "./todo.css";

const TodoItem: React.FC<{
  task: string;
  isCompleted: boolean;
  onSetCompleted: () => void;
  onDelete?: () => void; //onDeleteが指定されている場合は関数型を返す
}> = ({ task, isCompleted, onSetCompleted, onDelete }) => {
  return (
    <div className="item-container ">
      <ul className="todo-ul">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={onSetCompleted}
        />
        <span style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
          {task}
        </span>
      </ul>
      {onDelete && (
        <button className="delete-button" onClick={onDelete}>
          削除
        </button>
      )}
    </div>
  );
};

export default TodoItem;
