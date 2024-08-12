import { useDraggable, useDroppable } from "@dnd-kit/core";
import { FC } from "react";

type DroppableProp = {
  id: string;
  droppedTask: string | null;
};

const HourBlock: FC<DroppableProp> = ({ id, droppedTask }) => {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`flex items-center w-full h-ful${
        isOver ? "bg-lightblue" : "bg-transparent"
      }`}
    >
      {droppedTask && <div className="ml-2 ">{droppedTask}</div>}
    </div>
  );
};

export default HourBlock;
