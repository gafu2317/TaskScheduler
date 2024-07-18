import TodoList from "./Components/TodoList/TodoList";
import Scheduler from "./Components/Scheduler/Scheduler";
import "./App.css";
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { Box, Stack } from "@mui/material";
import { Draggable } from "./Components/test/Draggable";
import { Droppable } from "./Components/test/Droppable";

const App = () => {
    const [dropCount, setDropCount] = useState(0);
  return (
    <div className="app-container">
      <Box
        sx={{
          p: 2,
        }}
      >
        <DndContext
          onDragEnd={(event) => {
            const { over } = event;
            if (over == null) {
              return;
            }
            setDropCount((x) => x + 1);
          }}
        >
          <Box
            sx={{
              mb: 5,
            }}
          >
            <Draggable id="draggableA" label="ドラッグブロック" />
          </Box>
          <Droppable id="dropAreaA">{dropCount}回ドロップしたぜ</Droppable>
        </DndContext>
      </Box>
      {/* <div className="todo-list-container">
          <TodoList />
        </div>
        <div className="scheduler-container">
          <Scheduler id="dropArea">
            ここにタスクをドロップしてください
          </Scheduler>
        </div> */}
    </div>
  );
};

export default App;
