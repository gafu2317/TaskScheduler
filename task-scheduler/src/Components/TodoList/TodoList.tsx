// TodoList.tsx
import React, { FC, useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [tasks, setTasks] = useState<
    { id: string; task: string; isCompleted: boolean }[]
  >([]);
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);

  useEffect(() => {
    console.log("Tasks have been updated:", tasks);
  }, [tasks]);

  const addTask = (newTask: string) => {
    setTasks([
      ...tasks,
      { id: crypto.randomUUID(), task: newTask, isCompleted: false },
    ]);
  };

  // const setCompleted = (id: string) => {
  //   console.log("do setCompleted");
  //   setTasks(
  //     tasks.map((task) =>
  //       task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
  //     )
  //   );
  //   console.log("do setTasks");
  // };

  // const deleteCompletedTask = (id: string) => {
  //   setTasks(tasks.filter((task) => task.id !== id));
  // };

  // const incompleteTasks = tasks.filter((task) => !task.isCompleted);
  // const completedTasks = tasks.filter((task) => task.isCompleted);


  return (
    <div>
      <p className="text-center text-lg">Todoリスト</p>
      <div>
        <TodoForm onAddTask={addTask} />
        <p>未完了のタスク</p>
        <div>
          {tasks.map((task) => (//変更した
            <TodoItem
              key={task.id}
              id={task.id}
              task={task.task}
              isCompleted={task.isCompleted}
              // onSetCompleted={() => setCompleted(task.id)}
            />
          ))}
        </div>
        {/* <button
          onClick={() => setShowCompletedTasks(!showCompletedTasks)}
          className="border border-black p-1 rounded-md bg-gray-100 mt-2"
        >
          {showCompletedTasks
            ? "完了したタスクを隠す"
            : "完了したタスクを表示する"}
        </button>
        {showCompletedTasks && (
          <div>
            {completedTasks.map((task) => (
              <TodoItem
                key={task.id}
                id={task.id}
                task={task.task}
                isCompleted={task.isCompleted}
                onSetCompleted={() => setCompleted(task.id)}
                onDelete={() => deleteCompletedTask(task.id)}
              />
            ))}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default TodoList;
