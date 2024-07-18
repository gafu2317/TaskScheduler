// TodoList.tsx
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import "./todo.css";

const TodoList = () => {
  const [tasks, setTasks] = useState<
    { id: string; task: string; isCompleted: boolean }[]
  >([]);
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);

  const addTask = (newTask: string) => {
    setTasks([
      ...tasks,
      { id: crypto.randomUUID(), task: newTask, isCompleted: false },
    ]);
  };

  const setCompleted = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteCompletedTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const incompleteTasks = tasks.filter((task) => !task.isCompleted);
  const completedTasks = tasks.filter((task) => task.isCompleted);

  return (
    <div>
      <h1 className="todolist-title">Todoリスト</h1>
      <div className="todolist-container">
        <TodoForm onAddTask={addTask} />
        <h2>未完了のタスク</h2>
        <ul className="todo-ul">
          {incompleteTasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task.task}
              isCompleted={task.isCompleted}
              onSetCompleted={() => setCompleted(task.id)}
            />
          ))}
        </ul>
        <button onClick={() => setShowCompletedTasks(!showCompletedTasks)}>
          {showCompletedTasks
            ? "完了したタスクを隠す"
            : "完了したタスクを表示する"}
        </button>
        {showCompletedTasks && (
          <ul className="todo-ul">
            {completedTasks.map((task) => (
              <TodoItem
                key={task.id}
                task={task.task}
                isCompleted={task.isCompleted}
                onSetCompleted={() => setCompleted(task.id)}
                onDelete={() => deleteCompletedTask(task.id)}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TodoList;
