// TodoList.tsx
import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [tasks, setTasks] = useState<
    { id: string; task: string; isCompleted: boolean }[]
  >([]);

  useEffect(() => {
    console.log("Tasks have been updated:", tasks);
  }, [tasks]);

  const addTask = (newTask: string) => {
    setTasks([
      ...tasks,
      { id: crypto.randomUUID(), task: newTask, isCompleted: false },
    ]);
  };

  // const deleteTask = (id: string) => {
  //   setTasks(tasks.filter((task) => task.id !== id));
  // }

  return (
    <div>
      <p className="text-center text-lg">Todoリスト</p>
      <div>
        <TodoForm onAddTask={addTask} />
        <p>未完了のタスク</p>
        <div>
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              id={task.id}
              task={task.task}
              isCompleted={task.isCompleted}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
