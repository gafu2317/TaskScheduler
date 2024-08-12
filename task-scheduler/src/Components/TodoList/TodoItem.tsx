// TodoItem.tsx
import React from "react";
import { useDraggable } from "@dnd-kit/core";

const TodoItem: React.FC<{
  task: string;
  isCompleted?: boolean;
  id: string;
}> = ({ task, isCompleted,id }) => {
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
    <div className="p-1">
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={{
          transform: transformStyle,
          height: "fit-content",
        }}
      >
        <span
          className="rounded border border-black bg-gray-200 p-1"
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
    </div>
  );
};

export default TodoItem;

// 削除ボタン(チェックボタン)はtodoItemとは別にする
