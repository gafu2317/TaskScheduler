import TodoList from "./Components/TodoList/TodoList";
import Scheduler from "./Components/Scheduler/Scheduler";
import "./App.css";
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";

interface DragData {
  task: string;
}

const App = () => {
  const [droppedTasks, setDroppedTasks] = useState<Array<string | null>>(
    Array(24).fill(null)
  );

  const handleDrop = (index: number, task: string) => {
    const newDroppedTasks = [...droppedTasks];
    newDroppedTasks[index] = task;
    setDroppedTasks(newDroppedTasks);
  };

  return (
    <div className="flex ">
      <DndContext
        onDragEnd={(event) => {
          const { over, active } = event;
          if (over == null) {
            return;
          }
          const data = active.data.current as DragData; // 型を指定
          const { task } = data;
          const hourIndex = parseInt(over.id as string, 10); //10は10進数の10
          handleDrop(hourIndex, task);
        }}
      >
        <div className="bg-gray-300 m-3 rounded-md p-4 flex-grow w-full">
          <TodoList />
        </div>
        <div className="bg-gray-300 m-3 rounded-md p-4 flex-grow w-full">
          <Scheduler droppedTasks={droppedTasks} />
        </div>
      </DndContext>
    </div>
  );
};

export default App;
