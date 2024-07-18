import { useDroppable } from "@dnd-kit/core";
import { FC, ReactNode } from "react";

type DroppableProp = {
  children: ReactNode;
  id: string;
};

const Scheduler: FC<DroppableProp> = ({ children, id }) => {
  // const { setNodeRef, isOver } = useDroppable({
  //   id,
  // });

  return (
    <div
      // ref={setNodeRef}
      // style={{
      //   backgroundColor: isOver ? "lightblue" : "undifined",
      // }}
    >
      {children}
    </div>
  );
};

export default Scheduler;
