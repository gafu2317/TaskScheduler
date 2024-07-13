import React, { useState, useEffect } from "react";

const MAX_TASK_LENGTH = 500;

const TodoForm: React.FC<{ onAddTask: (task: string) => void }> = ({
  onAddTask,
}) => {
  const [task, setTask] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    if (showError) {
      timeoutId = setTimeout(() => {
        setShowError(false);
      }, 3000); // 3秒後にエラーメッセージを非表示にする
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId); //clearTimeoutはWebブラウザの標準APIの一つでJavaScriptの標準ライブラリの一部として利用できます
      }
    };
  }, [showError]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // taskが空の場合
    if (task.trim() === "") {
      setError("タスクを入力してください");
      setShowError(true);
      return;
    }

    // taskが50文字を超える場合
    if (task.length > MAX_TASK_LENGTH) {
      setError(`タスクは${MAX_TASK_LENGTH}文字以内で入力してください`);
      setShowError(true);
      return;
    }

    // ここでタスクの追加処理を行う
    onAddTask(task);
    setTask("");
    setError(null);
    setShowError(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input type="submit" value="追加" />
        {showError && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default TodoForm;
