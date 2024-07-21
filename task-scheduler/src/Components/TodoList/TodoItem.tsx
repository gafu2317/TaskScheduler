// TodoItem.tsx
import React from "react";
import { useDraggable } from "@dnd-kit/core";

const TodoItem: React.FC<{
  task: string;
  isCompleted: boolean;
  // onSetCompleted: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete?: () => void;
  id: string;
}> = ({
  task,
  isCompleted,
  // onSetCompleted,
  onDelete,
  id,
}) => {
  const { setNodeRef, listeners, attributes, transform, isDragging } =
    useDraggable({
      id,
      data: {
        task: task,
      },
    });

  const transformStyle = transform
    ? `translate(${transform.x}px, ${transform.y}px)`
    : undefined;

  return (
    <div className="item-container ">
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={{
          transform: transformStyle,
          height: "fit-content",
        }}
      >
        <input
          type="checkbox"
          checked={isCompleted}
          // onChange={(event) => {
          //   console.log("Checkbox changed");
          //   onSetCompleted(event);
          // }}
        />
        <span
          style={{
            textDecoration: isCompleted ? "line-through" : "none",
            userSelect: "none",
            cursor: isDragging ? "grabbing" : "grab",
            opacity: isDragging ? 0.5 : undefined,
          }}
        >
          {task}
        </span>
      </div>
      {/* {onDelete && <button onClick={onDelete}>削除</button>} */}
    </div>
  );
};

export default TodoItem;
