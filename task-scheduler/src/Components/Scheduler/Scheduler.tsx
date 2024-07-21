import { FC, ReactNode } from "react";
import HourBlock from "./HourBlock";

type DroppableProp = {
  droppedTasks: Array<string | null>;
};

const Scheduler: FC<DroppableProp> = ({ droppedTasks }) => {
  return (
    <div className="flex flex-col">
      {Array.from({ length: 24 }).map((_, index) => (
        <div
          key={index}
          className="flex border border-black p-2 rounded-md"
        >
          {index}
          <HourBlock id={`${index}`} droppedTask={droppedTasks[index]} />
        </div>
      ))}
    </div>
  );
};

export default Scheduler;
