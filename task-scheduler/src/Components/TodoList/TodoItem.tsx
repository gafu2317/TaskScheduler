// TodoItem.tsx
import React from "react";
import { DragOverlay, useDraggable } from "@dnd-kit/core";

const TodoItem: React.FC<{
  task: string;
  isCompleted?: boolean;
  id: string;
  onDelete: (id: string) => void;
  showDeleteButton?: boolean;
}> = ({ task, isCompleted, id, onDelete, showDeleteButton = true }) => {
  const { setNodeRef, listeners, attributes, transform, isDragging } =
    useDraggable({
      id,
      data: {
        id,
        task,
        isCompleted,
      },
    });

  const transformStyle = transform
    ? `translate(${transform.x}px, ${transform.y}px)`
    : undefined;

  return (
    <div className="flex">
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
          className="rounded border border-black bg-gray-200 text-sm p-[2px]"
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
      {showDeleteButton && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // ドラッグ操作を無効にする
            console.log(`Task with id ${id} is clicked`);
            onDelete(id);
          }}
          className=" bg-red-500 text-white rounded text-sm ml-1 px-1"
        >
          削除
        </button>
      )}
    </div>
  );
};

export default TodoItem;
