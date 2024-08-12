//App.tsx
import TodoList from "./Components/TodoList/TodoList";
import Scheduler from "./Components/Scheduler/Scheduler";
import "./App.css";
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import TodoItem from "./Components/TodoList/TodoItem";

interface DragData {
  task: string;
  id: string;
  isCompleted: boolean;
}


const App = () => {
  const [droppedTasks, setDroppedTasks] = useState<
    Array<React.ReactNode | null>
  >(Array(24).fill(null));


  const handleDrop = (index: number, taskData: DragData) => {
    const newDroppedTasks = [...droppedTasks];
    newDroppedTasks[index] = (
      <TodoItem
        key={taskData.id}
        id={taskData.id}
        task={taskData.task}
        isCompleted={taskData.isCompleted}
      />
    );
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
          const hourIndex = parseInt(over.id as string, 10); //10は10進数の10
          handleDrop(hourIndex, data);
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
